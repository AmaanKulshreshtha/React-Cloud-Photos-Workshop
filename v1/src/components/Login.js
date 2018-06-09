import React, { Component } from 'react';

class Login extends Component {
    render(){
        return(
			<div>
				<p>{this.props.error}</p>
				<input type="text"  onChange={this.props.email}/><br /> 
				<input type="password" onChange={this.props.password}/><br /> 
				<input type="submit"   onClick={this.props.login}/><br />
			</div>
        )
    }
}

export default Login;