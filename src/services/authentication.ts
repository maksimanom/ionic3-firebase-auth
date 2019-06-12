import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const identifier = "token";

@Injectable()
export class Authentication{

    public token : string; 

    constructor(private angularAuth : AngularFireAuth){
        this.setUp();
    }

    createUserWithEmailAndPassword(email, password){
        return this.angularAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    setUp(){
        this.token = this.getTokenFromLS();
        console.log(this.token);
        this.angularAuth.authState.subscribe((firebaseUser)=>{
           if(firebaseUser){
               localStorage.setItem(identifier,firebaseUser.uid);
               this.token = firebaseUser.uid;
           }else{
               localStorage.removeItem(identifier);
               this.token = null;
           }
        })
    }

    getTokenFromLS(){
        return localStorage.getItem(identifier);
    }

    logOut(){
        return this.angularAuth.auth.signOut().then(()=>{
            this.token = null;
        })
    }

    createUserWithGoogle(){
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.createUserWithProvider(provider);
    }

    createuserWithFacebook(){
        let provider = new firebase.auth.FacebookAuthProvider();
        return this.createUserWithProvider(provider);
    }

    createUserWithProvider(provider){
        return this.angularAuth.auth.signInWithRedirect(provider)
            .then(result =>{
                return firebase.auth().getRedirectResult;
        });
    }    
}
