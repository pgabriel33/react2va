import React, {Component} from 'react';
import './login.css';
export class login extends Component {
    render() {
        return (
            <div>
                <div className="wrapper" style={{height:'640px'}}>
                <div id="formLogin">    
            
                
                    <div>
                        <img src="../img/logo1.png" style={{width:'26%',margin:'0 0 0 166px'}}id="logo" />
                        <h1>Login</h1>
                    </div>
                    <div>
                        <form>
                            <input type="text" id="login" name="login" placeholder="Usuário"/>
                            <input type="password" id="password" name="login" placeholder="Senha"/>      
                        </form>
                    </div>
                    <a href="./Dashboard">
                        <button className="btn btn-primary">Entrar</button>
                   </a>
                   
                    <div id="formFooter">
                        <a className="finalForm" href="#">Esqueceu a senha?</a>
                        <a className="finalForm" href="./cadastrousuario">Cadastrar-se</a>
                    </div>
                    
                </div>
            </div>
            </div>
        )
   }
};

export default login;