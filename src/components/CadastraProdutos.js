import React, {Component} from 'react';
import './cadastroProduto.css';

export class CadastraProdutos extends Component {
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
                <form name="meuForm">
                <div className="container" style={{margin: '-576px 0px 0px 236px', width:'1000px',height: '680px'}}>
                     
                  <h2 style={{color:'black'}}>Cadastro de Produtos</h2>
                    
                      <div className="form-group">
                        <label for="exampleFormControlInput1" style={{ margin: '46px 0px 0 0',float:'left'}}>Nome do Produto</label>
                        <input type="text"style={{width:'963px',backgroundColor: 'white',textAlign:'left',padding:'0 0 0 4px'}} className="form-control" id="Nomeproduto" placeholder="Nome"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">ID do Produto</label>
                        <input type="Number"  className="form-control" id="ID" placeholder="ID"/>
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
                        <input type="number" className="form-control" id="tamanho" placeholder="Tamanho"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Preço em R$</label>
                        <input type="number" className="form-control" id="Preço" placeholder="Preço"/>
                    </div>
                    <button  className="btn btn-primary">Enviar  <a href="#"></a></button>
                    <button type="reset" className="btn btn-warning">Limpar</button>
                    
                </div>
            </form>

        </div>
            </div>
        )
   }
};

export default CadastraProdutos;