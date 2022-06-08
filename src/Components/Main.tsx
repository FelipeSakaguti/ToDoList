import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react'
import { Task } from './Task';
import styles from './Main.module.css';

const tasksTasks = [
    {
        id: uuidv4(),
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isComplete: false,
    },
    {
        id: uuidv4(),
        title: 'Terminar esse paranaue',
        isComplete: true,
    },
    {
        id: uuidv4(),
        title: 'Fazer um front pica das galaxias, zica dos roles, ticaratica dos tiquereteudes, piponhos picanhas piradas!',
        isComplete: false,
    },
]

export function Main(){
    const [tasks, setTasks] = useState(['1','2','3']);

    return(
        <div>
            <form onSubmit={()=>{}} className={styles.toDoForm} >
                <textarea
                    name="task"
                    placeholder="Adicione uma tarefa"
                    // value={newCommentText}
                    // onChange={handleNewCommentChange}
                    // onInvalid={handleNewCommentInvalid}
                    required
                />

                <button type='submit'>
                    <span>Criar <PlusCircle /></span>
                </button>
                
            </form>
            <div className={styles.taskHeader}>
                <div className={styles.createdHeader}>
                    <strong>Tarefas criadas</strong>
                    <span>5</span>
                </div>
                <div className={styles.concludedHeader}>
                    <strong>Concluídas</strong>
                    <span>2 de 5</span>
                </div>
            </div>

            {tasks.map( content => {
                return(
                    <Task id={content} />
                )
            })}

        </div>
    )
}