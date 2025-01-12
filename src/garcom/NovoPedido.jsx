import { Link } from 'react-router-dom';
import Banner from '../layout/Banner';
import Nav from '../layout/Nav';
import Search from '../layout/Search';
import SecaoItens from '../layout/SecaoItens';

function NovoPedido(){

    const nomeEstabelecimento = localStorage.getItem("nomeEstabelecimento")










    return(
        <div>



            <Nav nome_hotel={nomeEstabelecimento}/>
            <Search/>
            <SecaoItens/>








            
        </div>
    )





}

export default NovoPedido