import React, { Component } from 'react';
import './Register.scss';
import firebase from '../../../config/firebase'

class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value            
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state;        
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res =>{
            alert('Anda berhasil daftar');
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Anda gagal daftar, Error code ', errorCode);
          });
    }

    render() {
        return (
            <div className="auth-conatiner">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="email" type="text" onChange={this.handleChangeText} />
                    <input className="input" id="password" placeholder="password" type="password" onChange={this.handleChangeText} />
                    <button onClick={this.handleRegisterSubmit} className="btn">Register</button>
                </div>
                    {/* <button>Go to Dashboard</button> */}
            </div>
        );
    }
}

export default Register;