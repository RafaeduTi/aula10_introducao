'use client'
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato(){
    const[nome,alteraNome] = useState("")
    const[mensagem,alteraMensagem] = useState("")

//Voc esta errada
    function enviaMensagem(e){
       e.preventDefault()
       
       
        if
       (nome==""||mensagem=="" ){
            console.log ("Por favor, prencha todos os campos...")
       }else{
                   console.log ("Mensagem enviada com sucesso!")
       }

    }
    


    return (
    <div>
            <h1>Página de contato</h1>
            <p>Entre em contato conosco.</p>
            <hr/>
            <form onSubmit={(e)=> enviaMensagem(e)}>
                    <label>
                        Digite seu nome:
                        <input onChange={(e)=> alteraNome(e.target.value)  }/>

                        </label>
            <br/>
                <label>
                    Digite sua mensagem:
                    <input onChange={(e)=> alteraMensagem(e.target.value)  }/>
                </label>
            <br/>
            <button>Enviar</button>            
            </form>















 
    </div>


    )





}