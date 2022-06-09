import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react'
import { Task } from './Task';
import styles from './Main.module.css';
import clipboardSvg from '../assets/clipboard.svg';

interface Tasks{
    id: string;
    title: string;
    isComplete: boolean;
}

export function Main(){
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<Tasks[]>([])

    const [totalTask, setTotalTask] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    // useEffect(()=> {
    //     const totalCompletedTasks = tasks.reduce( ( acc, task) => {
    //         if(task.isComplete){
    //             return (acc + 1)
    //         } else {
    //             return acc
    //         }
    //     }, 0);

    //     console.log(totalCompletedTasks)
    //     setCompletedTasks(totalCompletedTasks)
    // }, tasks)

    function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    };

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    };

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();

        setTasks([...tasks, {
            id: uuidv4(),
            title: newTask,
            isComplete: false
        }])
        setNewTask('');
        setTotalTask(totalTask + 1)
    };

    function completeTask(id: string): void {
        let sumCompletedTask = 0
        const tasksWithCompletedTask = tasks.map(task => {
            if( task.id === id ){
                sumCompletedTask = task.isComplete ? -1 : 1;
                return({
                    id: task.id,
                    title: task.title,
                    isComplete: !task.isComplete
                });
            }else{
                return task
            }
        });
        
        setCompletedTasks(completedTasks + sumCompletedTask);
        setTasks(tasksWithCompletedTask);
    };

    function deleteTask(id: string){
        let sumCompletedTask = 0
        const taskListWithoutDeleted = tasks.filter(task => {
            if(task.isComplete && task.id === id){
                sumCompletedTask = 1
            }
            return task.id !== id
        })
        setTasks(taskListWithoutDeleted);
        setCompletedTasks(completedTasks - sumCompletedTask);
        setTotalTask(totalTask - 1)
    };

    return(
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.toDoForm} >
                <textarea
                    name="task"
                    placeholder="Adicione uma tarefa"
                    value={newTask}
                    onChange={handleNewTask}
                    onInvalid={handleNewTaskInvalid}
                    required
                />

                <button type='submit' >
                    <span>Criar <PlusCircle /></span>
                </button>
                
            </form>
            <div className={styles.taskHeader}>
                <div className={styles.createdHeader}>
                    <strong>Tarefas criadas</strong>
                    <span>{String(totalTask)}</span>
                </div>
                <div className={styles.concludedHeader}>
                    <strong>Concluídas</strong>
                    <span>{String(completedTasks)} de {String(totalTask)}</span>
                </div>
            </div>

            { totalTask === 0 ? 
                <div className={styles.noTaskContainer} >
                    <img src={clipboardSvg} alt="ClipBoard" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
                :
                tasks.map( task => {
                    return(
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            isComplete={task.isComplete}
                            onCompleteTask={completeTask}
                            onDeleteTask={deleteTask}
                        />
                    )
                })
            }

        </div>
    )
}