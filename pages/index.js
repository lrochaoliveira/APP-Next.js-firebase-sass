import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { database } from '../service/firebase.ts'
import { useState } from 'react'

export default function Home() {

  const [nome, setNome] = useState('')
  const [email, setEmail]= useState('')
  const [telefone, setTelefone] = useState('')
  const [observacoes, setObservacoes] = useState('')

  function gravar(){

    const ref = database.ref('contatos')

    const dados = {cd 
      nome,
      email,
      telefone,
      observacoes
    }

    ref.push(dados)

  }

  return (
    <>
      <main className={styles.container} >
        <form onSubmit={ gravar }> 
          <input type = "text" placeholder="Nome" onChange={event => setNome(event.target.value)}></input>
          <input type = "text" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
          <input type = "text" placeholder="Telefone" onChange={event => setTelefone(event.target.value)}></input>
          <textarea placeholder="Observações" onChange={event => setObservacoes(event.target.value)}></textarea>
          <button type="submit">Salvar</button>
        </form>
        <div className={styles.CaixaContatos}>
          <input type="text" placeholder="buscar"></input>
          <div className={styles.caixaIndividual}>
            <div className={styles.boxTitulo}>
              <p className={styles.nomeTitulo}>Maria da Penha Soares</p>
              <div>
                <a>Editar</a>
                <a>Excluir</a>
              </div>
            </div>
            <div className={styles.dados}>
              <p>mps@gmail.com</p>
              <p>00000000</p>
              <p>Amiga de infância</p>
            </div>

          </div>
        </div>
        
      </main>
    </>
  )
}
