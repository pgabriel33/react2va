import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';


import ListarProdutos from './components/ListarProdutos';
import CadastraProduto from './components/CadastraProdutos';

import Dashboard from './components/Dashboard';
import gerenciarUsuario from './components/gerenciarUsuario';
import inicio from './components/inicio';
import login from './components/login';
import cadastrousuario from './components/cadastrousuario';
import produtos from './components/produtos';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                   
                    <Route path="/" exact component={inicio}/>
                    <Route path="/Dashboard" component={Dashboard} /> 
                    <Route path="/gerenciarUsuario" component={gerenciarUsuario}/>
                    <Route path="/Listarprodutos" component={ListarProdutos}/>
                    <Route path="/CadastraProdutos" component={CadastraProduto}/>
                    <Route path="/login" component={login}/>
                    <Route path="/cadastrousuario" component={cadastrousuario}/>
                    <Route path="/produtos" component={produtos}/>
                </Switch>
            </div>
        )
    }
};

export default Routes;