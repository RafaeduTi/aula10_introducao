'use client'

import { useState } from "react";
import "./quiz.css"
import Menu from "../produtos/components/Menu";

function Quiz(){
    const[p1,alteraP1]=useState(0)
    const[p2,alteraP2]=useState(0)
    const[p3,alteraP3]=useState(0)
    const[p4, alteraP4]=useState("")
    const[total, alteraTotal]= useState(0)  


    const[selecionado,alteraSelecionado]=useState(["","","",""] )

    function calculaPontos(){
        alteraTotal(p1+p2+p3)
        if (p4=="Tropa de Elite"){
            alteraTotal(total+1)
        }
    }   


    return (  
        <div>
            <h1> Quiz Conradito</h1>
            <p> Assina-le a opção correta!</p>
            <hr/>
            <h2> Qual a cor do cavalo branco de Napoleãum?</h2>
            <label><input name="p1" type ="radio" on onChange={()=> alteraP1(0)} /> Preto</label>
            <br/>
            <label><input name="p1" type ="radio" on onChange={()=> alteraP1(0)} /> Azul</label>
            <br/>
            <label><input name="p1" type ="radio" on onChange={()=> alteraP1(0)} /> Branco</label>
            <br/>
            <label><input name="p1" type ="radio" on onChange={()=> alteraP1(1)} /> Transparente</label>
            <br/>
            <hr/>
            <h2>Qual a melhor letra?</h2>
            <label><input name="p2" type="radio" on onChange={()=> alteraP2(1)}/> A </label>
            <br/>
            <label><input name="p2" type="radio" on onChange={()=> alteraP2(0)}/> B </label>
            <br/>
            <label><input name="p2" type="radio" on onChange={()=> alteraP2(0)}/> C</label>
            <br/>
            <label><input name="p2" type="radio" on onChange={()=> alteraP2(0)}/> X </label>
            <br/>
            <hr/>
            <h2> Quanto é dois + 2?</h2>
            <p className= {selecionado[0]} onClick={()=> { alteraP3 (0); alteraSelecionado(["selecionado","","",""])}}>2</p>
            <p className= {selecionado[1]} onClick={()=> {alteraP3 (0); alteraSelecionado(["","selecionado","",""])}}>0</p>
            <p className= {selecionado[2]} onClick={()=> {alteraP3 (1); alteraSelecionado(["","","selecionado",""])}}>aaaaa</p>
            <p className= {selecionado[3]} onClick={()=> {alteraP3 (0); alteraSelecionado(["","","","selecionado"])}}>sim</p>

             <hr/>
            <h2> Qual é o melhor filme do mundo?</h2>
          <input onChange={(e)=> alteraP4(e.target.value)}/>

            
            <br/>







        <button onClick={ ()=>calculaPontos() }Enviar resposta >Enviar</button>

            <p>Total de pontos = {total}</p>


           






        </div>




    
    );
}

export default Quiz












