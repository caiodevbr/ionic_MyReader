import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public feeds: Array<string>;
  private url: string = "https://www.reddit.com/new.json";  
  private siteMap:string="https://tableless.com.br/criando-uma-aplicacao-movel-com-ionic-2-e-angular-2-em-dez-passos/";

  constructor(public navCtrl: NavController, public http: Http,public loadingCtrl:LoadingController) 
  {

      this.fetchContent();

  }

  fetchContent():void
  {
    let loading=this.loadingCtrl.create({
        content:'Fetching content....'
      
    });

    loading.present();

  this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.data.children;
        // Exibindo conteúdo do array no console do browser
      console.log(this.feeds);
      loading.dismiss();
      }); 
  
   
        
    }
    itemSelected(feed):void{
      alert(feed.data.url);
    }
}