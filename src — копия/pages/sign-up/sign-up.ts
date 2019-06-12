import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from '../../services/authentication';

/**
 * Generated class for the SignUp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  email : string;
  password : string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private auth : Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUp');
  }

  createAccount(){
    this.auth.createUserWithEmailAndPassword(this.email,this.password);
  }

  createAccountWithGoogle(){
    this.auth.createUserWithGoogle();
  }

   createAccountWithFacebook(){
    this.auth.createuserWithFacebook();
  }

}
