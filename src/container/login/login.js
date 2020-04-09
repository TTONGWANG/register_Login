import React, { Component } from 'react';
import '../../css/config.scss'
import Logo from '../../img/logo.jpg'
class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
        }
    }

    handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleLogin=()=>{
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className='box'>
                    <div className='box_title'></div>
                    <img className='box_img' src={Logo} alt = 'logo'/>
                    <div className='typeIn'>
                        <from className='registerForm'>
                            username: <input name='username' type='email' placeholder='Email' value = {this.state.username} onChange = {this.handleChange}></input>
                            password: <input name='password' type='password' placeholder='Password' value = {this.state.password} onChange = {this.handleChange}></input>
                            <button className='Button'onClick = {this.handleLogin}>Login</button>
                            <button className='Button'>Not have account yet?</button>
                        </from>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;