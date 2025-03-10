'use client'

import { useState } from "react";

function Quiz(){
    const[p1,alteraP1]=useState(0)
    const[p2,alteraP2]=useState(0)
    const[p3,alteraP3]=useState(0)
    const[total, alteraTotal]= useState(0)
    
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
            <h2> Quanto é dois+2?</h2>
            <ul>
            <li onClick> ={()=> alteraP3(0)}2</li>
            <br/>
            <li><input name="p1" type ="radio" on onChange={()=> alteraP3(0)} /> 0</li>
            <br/>
            <li><input name="p1" type ="radio" on onChange={()=> alteraP3(0)} /> aaaaa</li>
            <br/>
            <li><input name="p1" type ="radio" on onChange={()=> alteraP3(1)} /> sim</li>
            </ul>
            
            
            <br/>






















            <button onClick={()=> alteraTotal(p1+p2)}>Enviar resposta</button>

            <p>Total de pontos:{total}</p>


           






        </div>





    );
}

export default Quiz












