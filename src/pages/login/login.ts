import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { MenuPage } from '../menu/menu';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: any = {};
  showUser: boolean = false;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,private fb: Facebook) {


  }


  ionViewDidLoad(){
    var nav = document.getElementById('nav');
    var head = document.getElementById('div_head');
    var bottom= document.getElementById('div_bottom');
    var content = document.getElementById('content');
    var contentHight= content.clientHeight-nav.clientHeight;
    var button = document.getElementById('button_div');
    button.style.height=(contentHight*0.30)+"px";
    head.style.height=(contentHight*0.30)+"px";
    bottom.style.height=(contentHight*0.30)+"px";
  }

  getInfo(){
    this.fb.api('/me?fields=id,name,email,first_name,picture,last_name,gender',['public_profile','email'])
    .then(data=>{
      console.log(data);
      this.navCtrl.setRoot(MenuPage);
      this.showUser = true; 
      this.user = data;
    })
    .catch(error =>{
      console.error( error );
    });
  }

  loginFacebook(){
    this.fb.login(['public_profile', 'email'])
    .then(rta => {
      console.log(rta.status);
      if(rta.status == 'connected'){
        this.getInfo();
      };
    })
    .catch(error =>{
      console.error( error );
    });
  }

  facebookLogin(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  login() {
    let prompt = this.alertCtrl.create({
      title: 'Iniciar sesión',
      message: "Ingresa tu usuario y contraseña",
      inputs: [
        {
          name: 'user',
          placeholder: 'Usuario'
        },
        {
          name: 'password',
          placeholder: 'Contraseña',
          type:"password",
        },
      ],
      buttons: [
        {
          text: 'Recuperar contraseña',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Iniciar sesión',
          handler: data => {
            this.navCtrl.setRoot(MenuPage);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  

}
