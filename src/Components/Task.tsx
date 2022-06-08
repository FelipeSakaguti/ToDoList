import { Trash } from 'phosphor-react';
import { ButtonHTMLAttributes, useState } from 'react';
import styles from './Task.module.css';

export function Task({ id}: ButtonHTMLAttributes<HTMLButtonElement>){
    const [check, setCheck] = useState(false);

    return(
        <div className={styles.container} >
            <div className={styles.checkbox} onClick={() => setCheck(!check)} >
                <div className={styles.check}>
                    <input className={styles.input} checked={check} type='checkbox'/>
                    <span className={styles.checkmark}></span>
                </div>
                <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</label>
            </div>
            <div className={styles.delete}>
                <button onClick={()=>{}} title="Deletar comentário">
                    <Trash size={18} />
                </button>
            </div>
        </div>
    )
}