import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalFiltros page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-filtros',
  templateUrl: 'modal-filtros.html'
})
export class ModalFiltros {
  filtros:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFiltrosPage');
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }

  aplicarFiltros(){
    this.viewCtrl.dismiss(this.filtros);
  }

}
