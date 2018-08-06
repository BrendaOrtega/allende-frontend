import React, { Component } from 'react';
import {LoginForm} from "./LoginForm";
import './LoginContainer.css';
import {logIn} from "../../services/authServices";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../../redux/actions/productsActions';
import toastr from 'toastr';

class LoginContainer extends Component{

  state = {
    isLogged: false
  };

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      this.setState({isLogged:true});
      if (user.role === 'admin') {
        this.props.history.push('/admin')
      } else if (user.role === 'user') {
        this.props.history.push('/user')
      }
    } else {
      this.setState({isLogged:false})
    }
  }

  login = (e) => {
    e.preventDefault();
    const auth = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    logIn(auth)
      .then(r => {
        let user = r.user;
        let token = r.access_token;
        toastr.success(`Bienvenido ${user.role}`); //cambiar por username
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access_token', JSON.stringify(token));
        if(user.role === 'admin') {
          this.props.history.push('/admin');
          this.props.actions.loadProducts(this.state.products)
        } else {
          this.props.history.push('/user');
        }
      })
      .catch(error => {
        console.log(error);
        toastr.error('Revisa tu correo y/o contraseña');
      })

  };

  render(){
    const {isLogged} = this.state;
    if(isLogged) toastr.success('Bienvenido de vuelta');
    return (
      <div className="container">
        <LoginForm onSubmit={this.login} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(productsActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);