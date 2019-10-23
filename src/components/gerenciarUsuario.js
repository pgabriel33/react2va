import React, {Component} from 'react';
import './gerenciarUsuario.css';

export class gerenciarUsuario extends Component {
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
                              <a className="nav-link" style={{fontSize:'18px'}}href="./gerenciarUsuarios">
                                <span data-feather="shopping-cart"></span>
                                Usuarios
                              </a>
                            </li>
                         
                          </ul>
                        </div>
          </nav>
                <div className="container text-center" style={{margin: '-576px 0px 0px 238px'}}>          
                    <h1 className="h2">Gerenciar Usuários</h1><hr/>

                    <input type="search" className="form-control ds-input" placeholder="Buscar Usuários..."/>  
                    
                    
                    <table className="table table-striped">
                                   <thead>
                                   <tr >
                                   <th scope="col">ID Usuário</th>
                                   <th scope="col">Nome</th>
                                   <th scope="col">Email</th>
                                   <th scope="col">Celular</th>
                                   <th scope="col">Cidade</th>
                                   <th scope="col">Estado</th>
                                   <th scope="col">CEP</th>
                                   <th scope="col">Alterar/Remover</th>
                                   <th scope="col">Definir Adm</th>
                                   </tr>
                                   </thead>
                              <tbody>
                                   <tr>
                                   <th scope="row">1</th>
                                   <td>Renato Carlos</td>
                                   <td>renato.carlos@mail.com</td>
                                   <td>11 981238972</td>
                                   <td>São Paulo</td>
                                   <td>São Paulo</td>
                                   <td>72981627</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                                <i className="fas fa-edit"></i>
                                        </button>
                                         <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                                 <i className="fas fa-trash"></i>
                                        </button>       
                                   </td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#definirADM">
                                             <i className="fas fa-user-edit"></i>
                                        </button>
                                   </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">2</th>
                                   <td>Amanda Carla</td>
                                   <td>amanda.carla@mail.com</td>
                                   <td>61 971923836</td>
                                   <td>Brasília</td>
                                   <td>Goias</td>
                                   <td>62812790</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                             <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                             <i className="fas fa-trash"></i>
                                        </button>          
                                   </td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#definirADM">
                                             <i className="fas fa-user-edit"></i>
                                        </button>
                                   </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">3</th>
                                   <td>Larissa Rebeca</td>
                                   <td>larissa.r3@mail.com</td>
                                   <td>62 987400136</td>
                                   <td>Anápolis</td>
                                   <td>Goias</td>
                                   <td>79129027</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                             <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                            <i className="fas fa-trash"></i>
                                        </button>       
                                   </td>
                                   <td>
                                             <button type="button" className="btn btn-light" data-toggle="modal" data-target="#definirADM">
                                                       <i className="fas fa-user-edit"></i>
                                             </button>
                                   </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">4</th>
                                   <td>Marcos Felipe</td>
                                   <td>marcos.felipe@mail.com</td>
                                   <td>47 982137218</td>
                                   <td>Blumenau</td>
                                   <td>Santa Catarina</td>
                                   <td>12762990</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                                  <i className="fas fa-edit"></i>
                                        </button>
                                             <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                                  <i className="fas fa-trash"></i>
                                        </button>       
                                   </td>
                                   <td>
                                             <button type="button" className="btn btn-light" data-toggle="modal" data-target="#definirADM">
                                                       <i className="fas fa-user-edit"></i>
                                             </button>
                                   </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">5</th>
                                   <td>Lailson Sergio</td>
                                   <td>laison.sergio@mail.com</td>
                                   <td>21 971002563</td>
                                   <td>Búzios</td>
                                   <td>Rio de Janeiro</td>
                                   <td>34221925</td>
                                   <td>
                                        <button type="button" className="btn btn-light"data-toggle="modal" data-target="#alterarProduto">
                                             <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn btn-light"data-toggle="modal" data-target="#excluirProduto">
                                             <i className="fas fa-trash"></i>
                                        </button>       
                                   </td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#definirADM">
                                             <i className="fas fa-user-edit"></i>
                                        </button>
                                   </td>
                                   </tr>
                                   <tr>
                                   <th scope="row">6</th>
                                   <td>Vanessa Camargo</td>
                                   <td>vanessa.camargo@mail.com</td>
                                   <td>15 982159046</td>
                                   <td>Sorocaba</td>
                                   <td>São Paulo</td>
                                   <td>18942731</td>
                                   <td>
                                        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#alterarProduto">
                                                  <i className="fas fa-edit"></i>
                                        </button>
                                             <button type="button" className="btn btn-light" data-toggle="modal" data-target="#excluirProduto">
                                                  <i className="fas fa-trash"></i>
                                        </button>       
                                   </td>
                                   <td>
                                             <button type="button" className="btn btn-light" data-toggle="modal" data-target="#definirADM">
                                                       <i className="fas fa-user-edit"></i>
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

          {/* <!-- Modal Alterar Produto-->                             */}
          <div className="modal fade" id="alterarProduto" tabindex="-1" role="dialog" aria-labelledby="alterarProdutoTitulo" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                              <div className="modal-header">
                                   <h5 className="modal-title" id="alterarProdutoTitulo">Alterar Produto</h5>
                                   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                                   </button>
                              </div>
                              
                              <div>
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
                                             <input type="number" className="form-control" style={{width:'400px'}} id="tamanho" placeholder="Tamanho"/>
                                             </div>
                                             <div className="form-group">
                                             <label for="exampleFormControlInput1">Preço em R$</label>
                                             <input type="number" className="form-control" style={{width:'400px'}} id="Preço" placeholder="Preço"/>
                                             </div>
                                             
                                        </div>
                                   </form>
                              </div>

                              <div className="modal-footer">
                                   <button type="button" className="btn btn-secondary" data-dismiss="modal">Não</button>
                                   <button type="button" className="btn btn-primary">Sim</button>
                              </div>

                         </div>
                    </div>
               </div>

          {/* <!-- Modal Excluir Produto-->                             */}
          <div className="modal fade" id="excluirProduto" tabindex="-1" role="dialog" aria-labelledby="excluirProdutoTitulo" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                         <div className="modal-header">
                              <h5 className="modal-title" id="excluirProdutoTitulo">Deseja excluir o produto?</h5>
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

          {/* <!-- Modal definir adm--> */}
          <div className="modal fade" id="definirADM" tabindex="-1" role="dialog" aria-labelledby="definirADMTitulo" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                              <div className="modal-header">
                                   <h5 className="modal-title" id="definirADMTitulo">Deseja alterar para Administrador?</h5>
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

            </div>
        )
   }
};

export default gerenciarUsuario;