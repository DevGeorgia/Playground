import { Component, OnInit } from '@angular/core';

import { NavParams, NavController } from "ionic-angular";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {

    name: string;

    constructor (
        private navParams: NavParams,
        private navCtrl: NavController
        ){

    }

    ngOnInit() {
        this.name = this.navParams.get('userName');
    }

    onGoBack(){
        // return to the previous page
        //this.navCtrl.pop();

        //return to root page and empty stack pages
        this.navCtrl.popToRoot();
    }

}
