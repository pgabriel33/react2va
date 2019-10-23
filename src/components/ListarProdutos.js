import React, {Component} from 'react';
import './listaProduto.css';
export class ListarProdutos extends Component {
    render() {
        return (
            <div>
               
               <nav className="navbar navbar-light" style={{backgroundColor: '#7290a5'}}>
                    <img src="../img/logo1.png" id="logo" style={{width:'7%'}}/>
              
                  
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
                <div className="container text-center" style={{margin: '-576px 0px 0px 236px',width: '1200px',height: '690px'}}>           
                    <h1 className="h2">Listagem de Produtos</h1><hr/>

                    <a href="./CadastraProdutos">
                         <button className="btn btn-primary">Cadastrar Produto</button>
                    </a>
                    
                    <input type="search" className="form-control ds-input" style={{float:'right'}}placeholder="Buscar Produtos..."/>  
                    
                    
                    <table className="table table-striped" style={{width: '1110px'}}>
                                   <thead>
                                   <tr>
                                   <th scope="col">ID Produto</th>
                                   <th scope="col">Nome</th>
                                   <th scope="col">Categoria</th>
                                   <th scope="col">Cor</th>
                                   <th scope="col">Tamanho em cm</th>
                                   <th scope="col">Preço em R$</th>
                                   <th scope="col">Alterar/Remover</th>
                                   </tr>
                                   </thead>
                              <tbody>
                                   <tr>
                                   <th scope="row">1</th>
                                   <td>Pedra1</td>
                                   <td>Quartzo</td>
                                   <td>Rosa</td>
                                   <td>170</td>
                                   <td>90</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                                <i className="fas fa-edit"></i>
                                        </button>
                                         <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                                 <i className="fas fa-trash"></i>
                                        </button>       
                                   </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">2</th>
                                   <td>Pedra2</td>
                                   <td>Retalho</td>
                                   <td>Branco</td>
                                   <td>200</td>
                                   <td>70</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                             <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                             <i className="fas fa-trash"></i>
                                        </button>          
                                       </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">3</th>
                                   <td>Pedra3</td>
                                   <td>Laje</td>
                                   <td>Verde</td>
                                   <td>70</td>
                                   <td>100</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                             <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                            <i className="fas fa-trash"></i>
                                        </button>       
                                       </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">4</th>
                                   <td>Pedra4</td>
                                   <td>Seixo</td>
                                   <td>Rosa</td>
                                   <td>231</td>
                                   <td>46</td>
                                   <td>
                                             <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                                  <i className="fas fa-edit"></i>
                                        </button>

                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                                  <i className="fas fa-trash" ></i>
                                        </button>  
                                        
                                   </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">5</th>
                                   <td>Pedra5</td>
                                   <td>Serrada</td>
                                   <td>Branco</td>
                                   <td>500</td>
                                   <td>112</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                                  <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                                  <i className="fas fa-trash"></i>
                                        </button>       
                                   </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">6</th>
                                   <td>Pedra6</td>
                                   <td>Seixo</td>
                                   <td>Verde</td>
                                   <td>198</td>
                                   <td>321</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                                  <i className="fas fa-edit"></i>
                                        </button>
                                             <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                                  <i className="fas fa-trash"></i>
                                        </button>       
                                   </td>
                                   </tr>
                              </tbody>
                    </table> 
                    <nav aria-label="Navegação de página">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a className="page-link" href="#" aria-label="Anterior">
                                    <span aria-hidden="true">Anterior</span>
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#" aria-label="Próximo">
                                    <span aria-hidden="true">Proximo</span>
                                  </a>
                                </li>
                              </ul>
                     </nav>
          </div>    
          </div>

          
          {/* <!-- Modal Excluir Produto-->                             */}
          <div className="modal fade" id="excluirProduto" tabindex="-1" role="dialog" aria-labelledby="excluirProdutoTiltulo" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                         <div className="modal-header">
                              <h5 className="modal-title" id="excluirProdutoTiltulo">Deseja excluir o produto?</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                         </div>
                         
                         <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Não</button>
                              <button type="button" className="btn btn-primary">Sim</button>
                         </div>
                    </div>
               </div>
          </div>

             {/* <!-- Modal Alterar Produto-->                             */}
             <div className="modal fade" id="alterarProduto" tabindex="-1" role="dialog" aria-labelledby="alterarProdutoTitulo" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                              <div className="modal-header">
                                   <h5 className="modal-title" id="alterarProdutoTitulo">Alterar Produto</h5>
                                   <button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
                                   <span aria-hidden="true">&times;</span>
                                  
                              </div>

                                <form name="meuForm">
                                    <div id="alterarProd">
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Nome do Produto</label>
                                            <input type="text" className="form-control"style={{width:'400px'}} id="Nomeproduto" placeholder="Nome"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">ID do Produto</label>
                                            <input type="Number" className="form-control"style={{width:'400px'}} id="ID" placeholder="ID"/>
                                        </div>        
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect1">Categoria</label>
                                            <select className="form-control" id="Categoria">
                                              <option>Escolher...</option>
                                              <option>Quartzo</option>
                                              <option>Seixo</option>
                                              <option>Laje</option>
                                              <option>Retalho</option>
                                              <option>Serrada</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect2">Cor</label>
                                            <select className="form-control" id="Cor">
                                              <option>Escolher...</option>
                                              <option>Rosa</option>
                                              <option>Branco</option>
                                              <option>Verde</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Tamanho em cm</label>
                                            <input type="number" className="form-control"style={{width:'400px'}} id="tamanho" placeholder="Tamanho"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Preço em R$</label>
                                            <input type="number" className="form-control" style={{width:'400px'}}id="Preço" placeholder="Preço"/>
                                        </div>
                                        
                                    </div>
                                </form>
                              
                              <div className="modal-footer">
                                   <button type="button" className="btn btn-secondary" data-dismiss="modal">Não</button>
                                   <button type="button" className="btn btn-primary">Sim</button>
                              </div>
                         </div>
                    </div>
               </div>

            </div>
        )
   }
};

export default ListarProdutos;