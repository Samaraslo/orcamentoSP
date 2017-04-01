import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { ContratosService } from '../../providers/contratos-service';
import { ModalFiltros } from '../modal-filtros/modal-filtros';

@Component({
    selector: 'page-page1',
    templateUrl: 'contratos.html',
    providers: [ContratosService]
})
export class Contratos {
    contratos: Array<any>;
    filtros: any;

    constructor(private alertCtrl: AlertController,
                public navCtrl: NavController,
                private contratosService: ContratosService,
                private loadingCtrl: LoadingController,
                public modalCtrl: ModalController) {
        this.filtros = {};
      //  this.initializeItems();
        this.getAllContratos();
    }
    /*initializeItems() {
        this.contratos = [
            { title: 'Teste Contrato 1', component: Contratos },
            { title: 'aTeste Contrato 2', component: Contratos },
            { title: 'Teste Contrato 3', component: Contratos },
            { title: 'bTeste Contrato 4', component: Contratos },
            { title: 'Teste Contrato 5', component: Contratos }
        ];
    }
    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contratos = this.contratos.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }*/

    getAllContratos() {
        this.contratosService.getAllContratosProvider()
          .subscribe(data => {
            this.contratos = data.res;
            console.log(this.contratos);

        },erro => {
                console.log('2', erro);
    });
}
    openModalFiltros(){
      let modal = this.modalCtrl.create(ModalFiltros);
      modal._cssClass = 'myModalFilters';
      modal.onDidDismiss(data=>{
        console.log('Filtros =>' , data);
        //chamar ws passando os parametros
      });
      modal.present();

    }

    presentPrompt() {
    let alert = this.alertCtrl.create({
    title: `<h1>Login</h1>`,
    inputs: [
    {
      name: 'username',
      placeholder: 'Username'
    },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password'
    }
    ],
    buttons: [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: data => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Login',
      handler: data => {
      //  if (User.isValid(data.username, data.password)) {
          // logged in!
      //  } else {
          // invalid login
          return false;
      //  }
      }
    }
    ]
    });
    alert.present();
    }

}
