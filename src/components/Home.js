import React, { Component } from 'react';
import firebase from 'firebase';

import './styles/gallery.css'
class Home extends Component {

    constructor(props){
        super();

        this.state = {
            uploader: {
                display: 'none'
            },
            progress: 0
        }

        this.logout = this.logout.bind(this)
        this.uploadPhoto = this.uploadPhoto.bind(this)
        this.delete = this.delete.bind(this)
    }

    logout(){
        firebase.auth().signOut()
    }

    uploadPhoto(e){
        var text = "";
        var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i<5; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }

    delete(id) {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`users/${currentUser.uid}/files/${id}`)
            .on('value', snapshot => {
                if(snapshot.val() != null) {
                    var loc = snapshot.val().loc;
                    var storageRef = firebase.storage().ref(loc);
                    storageRef.delete().then(function(){
                        firebase.database().ref(`/users/${currentUser.uid}/files/${id}`).remove();
                    }).catch(function(error){
                        console.log(error);
                    });
                }
            })
    }

    render(){
        return (
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
                    <p><progress max="100" style={this.state.uploader}></progress></p>
                    <p><input type="file" onChange={this.uploadPhoto} className="btn btn-primary btn-lg" id="file" /></p>
                    </div>
                    <div className="row flexRow">
                        {/* You'll be adding code here */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;