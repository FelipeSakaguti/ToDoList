import { Trash } from 'phosphor-react';
import { ButtonHTMLAttributes, useState } from 'react';
import styles from './Task.module.css';

interface TaskProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isComplete: boolean;
    id: string;
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({ id, title, isComplete, onCompleteTask, onDeleteTask }: TaskProps){
    
    function handleDeleteTask(){
        onDeleteTask(id)
    };

    return(
        <div className={styles.container} >
            <div className={styles.checkbox} onClick={() => onCompleteTask(id)} >
                <input className={styles.input} onChange={()=> onCompleteTask(id)} checked={isComplete} type='checkbox'/>
                <label htmlFor={id} >{title}  </label>
                <span className={styles.checkmark}></span>
            </div>
            <div className={styles.delete}>
                <button onClick={handleDeleteTask} title="Deletar comentário">
                    <Trash size={18} />
                </button>
            </div>
        </div>
    )
}