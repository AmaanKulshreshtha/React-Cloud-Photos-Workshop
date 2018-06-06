#Necessary code for React project

Install Node: https://nodejs.org/en/

<b>Run this on the terminal</b>

	<code>
		npm install -g create-react-app
		create-react-app doggy-cloud		
		cd doggy-cloud
		npm install axios firebase --save
	</code>


<b>Delete files mentioned below</b>

	- App.css 
	- App.test.js
	- index.css
	- App.js
	- logo.svg
	
<b>More TODOS </b>
  - Copy bootstarp.min.css and bootstrap.min.css.map in to the public folder
  - Create components directory in src folder
  - Copy styles in to components

<b>Firebase rules for database</b>
	{
		"rules": {
			"users": {
				"$uid":{
					".read" : "$uid === auth.uid",
					".write": "$uid === auth.uid"
				}
			}
		}
	}

<b>HTML for Login.js</b>

	<div>
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<a className="navbar-brand">React Cloud</a>
		</nav>
		<div className="container">
			<div className="row">
				<h1 className="content">Revolutionary Photo App</h1>
				<p className="error">{this.props.error}</p>
				<div className="form-cont">
					<div id="form">
						<div className="form-group">
							<label htmlFor="emailID">Email address</label>
							<input type="text" className="form-control" id="emailID" onChange={this.props.email} placeholder="Enter email" />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" className="form-control" id="password" onChange={this.props.password} placeholder="Password" />
						</div>
						<button className="btn btn-primary" id="login" onClick={this.props.login}>Log In or Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	</div>

<b>HTML for Home.js</b>	

	<div>
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<a className="navbar-brand"><span className="glyphicon glyphicon-picture" aria-hidden="true"></span>Doggy Cloud</a>
				</div>
				<ul className="nav navbar-nav navbar-right">
					<li><a onClick={this.logout} id='logout'>Logout</a></li>
				</ul>
			</div>
		</nav>
		<div className="container">
			<div className="jumbotron">
				<h1>Image Gallery</h1>
				<p><progress max="100"></progress></p>
				<p><input type="file" className="btn btn-primary btn-lg" id="file" /></p>
			</div>
			<div className="row flexRow">
				{/* You'll be adding code here */}
			</div>
		</div>
	</div>



<b>Firebase rules for datastore</b>

	service firebase.storage {
		match /b/{bucket}/o {
			match /{allPaths=**} {
				allow read, write: if request.auth.uid != null;
			}
		}
	}  

<b>API Key:</b> <code>AIzaSyAtKVJCCPmLP9p-voX2oxyXHq83fIwGwKw</code>





