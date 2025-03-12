'use client'
import "./painel.css"
import { useState } from "react";



function Painel () {
    
    const[usuario, alteraUsuario]=useState ("")
    const[senha, alteraSenha]=useState ("")
    const[mostraSuceso, alteraMostraSucesso]=useState("")
    const[mostraErro, alteraMostraErro]= useState()
   


    function validarLogin(){
     
        if (usuario=="Rafael" && senha=="1234"){
                alteraMostraErro(false)
                alteraMostraSucesso(true)

        }else{
                alteraMostraErro(true)
                alteraMostraSucesso(false)

        }
        if(usuario==""&& senha==""){}
        altera
        


    }






    return ( 
       
        <div>
            <h1>Painel Administrativo</h1>
            <label>
                Digite o usuário:
                <input onChange={(e)=> alteraUsuario (e.target.value)  }/>
            </label>
            
            <br/>
           
            <label>

                Digite a senha:
                <input onChange={(e)=> alteraSenha(e.target.value)  }/>
            
            </label>
            
            <br/>
            
            <button onClick={()=>entrar()}>Entrar</button>
            {
            mostraErro==true?
            <div className="erro">
                <p>Usuário ou senha incorretos</p>
            </div>
            :
             <div>  </div>
             }
             {
            mostraSucesso==true?
            <div className="sucesso">
                <p>Usuário logado com sucesso!</p>
            </div>
            :
             <div>  </div>
       
             }


             </div>


     )

}


export default Painel ;