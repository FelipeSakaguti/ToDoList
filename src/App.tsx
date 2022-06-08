import { useState } from 'react'

import { Header } from './Components/Header';
import { Main } from './Components/Main';

import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <>
      <Header/>
      <main className={styles.main} >
        <Main />
      </main>
    </>

  )
}
