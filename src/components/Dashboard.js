import React, {Component} from 'react';
import './dashboard.css';
export class Dashboard extends Component {
    render() {
        return (
            <div>
            
            <nav className="navbar navbar-light" style={{backgroundColor: '#7290a5'}}>
                    <img src="../img/logo1.png" id="logo"style={{width:'7%'}} />
              
                  
                    <ul className="navbar-nav px-3">
                         <li className="nav-item text-nowrap">
                              <img src="../img/male.png" id="user"/>
                         </li>
                         <li className="nav-item text-nowrap">
                              <a className="nav-link" href="./inicio">Sair</a>
                         </li>
                    </ul>
          </nav>
          <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light">
                    <div className="sidebar-sticky" >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <a className="nav-link active" style={{fontSize:'18px'}}href="./Dashboard">
                                <span data-feather="home"></span>
                                Dashboard <span className="sr-only"></span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" style={{fontSize:'18px;'}} href="./ListarProdutos">
                                <span data-feather="file"></span>
                                Produtos
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" style={{fontSize:'18px'}}href="./gerenciarUsuario">
                                <span data-feather="shopping-cart"></span>
                                Usuarios
                              </a>
                            </li>
                         
                          </ul>
                        </div>
          </nav>
            <div className="container text-center" style={{margin: '-576px 0px 0px 233px'}}>      
                <h1 className="h2">Dashboard - Painel de Controle</h1>
                <h1 className="h2">Bem Vindo Administrador</h1><br/>

                <div className="row">
                    <div className="card text-center bg-info" style={{width: '18rem'}}>
                            <div className="card-body">
                            
                                <h5 className="card-title">Total de Vendas Realizadas</h5>
                                <p className="card-text">26790</p>
                           
                            </div>
                    </div>
                    
                    <div className="card text-white text-center bg-warning" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Total de Produtos Cadastrados</h5>
                                <p className="card-text">12050</p>
                             
                            </div>
                    </div> 
                    
                    <div className="card text-center bg-success" style={{width: '18rem'}}>
                            <div className="card-body">
                              <h5 className="card-title">Total de Usuários Cadastrados</h5>
                              <p className="card-text">1100</p>
                         
                            </div>
                    </div>
                </div>
                
                <h1 className="h2">Histórico de Vendas</h1>
                <input type="search" className="form-control ds-input" placeholder="Buscar Vendas..."/>  
                <table className="table table-striped"style={{width:'1100px'}}>
                               <thead>
                               <tr>
                               <th scope="col">ID Venda</th>
                               <th scope="col">Nome do Produto</th>
                               <th scope="col">Nome do Usuário</th>
                               <th scope="col">Preço da Compra em R$</th>
                               <th scope="col">Data da Compra</th>
                               <th scope="col">Forma de Pagamento</th>
                               </tr>
                               </thead>
                          <tbody>
                               <tr>
                               <th scope="row">1</th>
                               <td>Pedra1</td>
                               <td>Renato Carlos</td>
                               <td>90</td>
                               <td>24/08/2019</td>
                               <td>Boleto Bancário</td>
                               
                               </tr>
                               <tr>
                               <th scope="row">2</th>
                               <td>Pedra2</td>
                               <td>Amanda Carla</td>
                               <td>70</td>
                               <td>01/09/2019</td>
                               <td>Cartão de Crédito</td>
                             
                               </tr>
                               <tr>
                               <th scope="row">3</th>
                               <td>Pedra3</td>
                               <td>Larissa Rebeca</td>
                               <td>100</td>
                               <td>12/09/2019</td>
                               <td>Cartão de Débito</td>
                             
                               </tr>
                               <tr>
                               <th scope="row">4</th>
                               <td>Pedra4</td>
                               <td>Marcos Felipe</td>
                               <td>46</td>
                               <td>25/07/2019</td>
                               <td>Cartão de Crédito</td>
                               
                               </tr>
                               <tr>
                               <th scope="row">5</th>
                               <td>Pedra5</td>
                               <td>Lailson Sérgio</td>
                               <td>112</td>
                               <td>09/08/2019</td>
                               <td>Boleto Bancário</td>
                            
                               </tr>
                               <tr>
                               <th scope="row">6</th>
                               <td>Pedra6</td>
                               <td>Vanessa Camargo</td>
                               <td>321</td>
                               <td>01/01/2019</td>
                               <td>Cartão de Débito</td>
                               </tr>
                          </tbody>
                </table> 
            </div>
        
        </div>
        
    </div>
        )
   }
};

export default Dashboard;