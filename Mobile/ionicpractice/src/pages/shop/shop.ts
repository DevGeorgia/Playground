import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';



@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToBuy(){
    this.navCtrl.push(BuyoutPage);
  }
  
  addToList(item: string) {
    this.navCtrl.push(BuyoutPage, {product: item} );
  }
}
