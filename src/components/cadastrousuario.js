import React, {Component} from 'react';
import './cadastrousuario.css';
export class cadastrousuario extends Component {
    render() {
        return (
            <div>
            <div className="wrapper">
         
            <form id="formCadUsuario">
             <div id="formHead"style={{color:'black'}}>Insira seus Dados </div>

               <div className="form-row">
                 <div className="form-group col-md-12">
                   <label for="inputNome"style={{color:'black'}}>Nome:</label>
                   <input type="text" style={{width:'675px'}}className="form-control" id="inputNome" placeholder="Nome"/>
                 </div>
             
                 <div className="form-group col-md-12">
                   <label for="inputEmail"style={{color:'black'}}>Email</label>
                   <input type="email"style={{width:'725px'}} className="form-control" id="inputEmail" placeholder="E-mail"/>
                 </div>
               </div>
                 
               <div className="form-row">
                 <div className="form-group col-md-12">
                   <label for="inputSenha"style={{color:'black'}}>Senha:</label>
                   <input type="password"style={{width:'670px'}} id="inputSenha" className="form-control"/> <span><small className="text-muted">Deve ter entre 8 e 20 caracteres.</small></span>
                 </div>
               </div>
               
               
               <div className="form-group">
                 <label for="inputEndereco"style={{color:'black'}}>Endereço:</label>
                 <input type="text"style={{width:'650px'}} className="form-control" id="inputEndereco" placeholder="Rua dos Ferroviários, nº 2."/>
               </div>

               <div className="form-group">
                 <label for="inputObs"style={{color:'black'}}>Obs:</label>
                 <input type="text" className="form-control" id="inputObs" placeholder="Apartamento, casa, loja, etc."/>
               </div>
                 
               <div className="form-row">
                 <div className="form-group col-md-6">
                   <label for="inputCidade"style={{color:'black'}}>Cidade:</label>
                   <input type="text" className="form-control" id="inputCidade"/>
                 </div>
                 <div className="form-group col-md-4">
                   <label for="inputEstado"style={{color:'black'}}>Estado:</label>
                   <select id="inputEstado" style={{height:'43px'}}className="form-control">
                     <option selected>Escolher...</option>
                     <option>...</option>
                   </select>
                 </div>
                 <div className="form-group col-md-2">
                   <label for="inputCEP"style={{color:'black'}}>CEP:</label>
                   <input type="text" className="form-control" id="inputCEP"/>
                   </div>
                 </div>

               <div className="form-row">
                 <div className="form-group col-md-6">
                   <label for="inputTelefone"style={{color:'black'}}>Telefone:</label>
                   <input type="text" className="form-control" id="inputTelefone" placeholder="(00) 00000-0000"/>
                 </div>
                 <div className="form-group col-md-6">
                   <label for="inputCelular"style={{color:'black'}}>Celular:</label>
                   <input type="text" className="form-control" id="inputCelular" placeholder="(00) 00000-0000"/>
                 </div>
               </div>
               <a href="./login">
                   <button className="btn btn-primary">Cadastre-se</button>
            </a>
         </form>
       </div>
    </div>
        )
   }
};

export default cadastrousuario;