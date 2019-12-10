import React from "react";
import {Link} from 'react-router-dom';

const links = [
    { route: "/Dashboard", label: ""},
    { route: "/gerenciarUsuario", label: ""},
    { route: "/ListarProdutos", label:" "},
    { route: "/CadastraProdutos", label:""},
    { route: "/inicio", label:""},
    { route: "/login",label:""},
    { route: "/cadastrousuario",label:""},
    
];

function renderLink() {
    return links.map( link =>
        
        <Link key={link.route} className="nav-link " to={link.route}>
            {link.label}
        </Link>
    )
}

function AppMenu (){
    return(
       <div> 
        {/* {renderLink()} */}
        

    </div>   
    )
}

export default AppMenu;
