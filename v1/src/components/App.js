import React, { Component } from 'react';
import firebase from 'firebase';

import Home from './Home.js'
import Login from './Login.js'
import './styles/login.css'

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			error: '',
			user: '',
			email: '',
			password: ''
		}
		this.login = this.login.bind(this)
		this.email = this.email.bind(this)
		this.password = this.password.bind(this)
	}

	componentDidMount(){
		firebase.auth().onAuthStateChanged((user)=> {
			this.setState({
				user
			})
		})
	}

	email(e){
		this.setState({ email: e.target.value })
	}

	password(e){
		this.setState({ password: e.target.value })
	}

	login(e){
		const email = this.state.email
		const password = this.state.password

		firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
			console.log("You are logged in");
		}).catch((err) => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.catch((err)=>{
					this.setState({ error: err.message })
				});
		});
	}

	render(){
		if(!this.state.user){
			return (
				<Login 
					error={this.state.error}
					login={this.login}
					email={this.email}
					password={this.password}
				/>
			);
		}
			return <Home />;
	}
}

export default App;