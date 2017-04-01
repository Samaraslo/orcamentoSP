import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContratosService {

  baseUri: string;
  urlContrato:string;
  token:string;

  constructor(public http: Http) {
    console.log('Hello ContratosService Provider');
    this.urlContrato = 'https://gatewayapi.prodam.sp.gov.br:443/financas/orcamento/sof/v2.1.1/consultaContrato';
  }

  getAllContratosProvider(){
    let headers = new Headers({
      'Content-Type': 'application/json' ,
      'Authorization': 'Bearer 5fcddf929dd5a9876b914487fcf03c98'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.urlContrato, options)
      .map(res => res.json())

  }



/*

//headers.append('Content-Type', 'application/json');
//headers.append('Authorization', 'Bearer ' + this.token);

    console.log('1');
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUri +'?'+ headers )
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });

  }*/






}
