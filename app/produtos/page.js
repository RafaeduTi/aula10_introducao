import Menu from "./components/Menu";
import Produto from "./components/Produto";

function Produtos() {
    return (  

        <div>
            <Menu/>
            <h1>Produtos</h1>
            <p>Bem-vindo a página de produtos  </p>

            <hr/>
        <Produto nome="Maça" preco="15,90" desconto="10" comprar={true}/>
        <Produto nome="Uva"  preco="16,00"/> 
        <Produto nome="Pera" preco="17,80" desconto ="5"  comprar = {true}/>
        


        </div>



    );
}

export default Produtos;