import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
	}

	AddToCart(item)
	{
		var pizzaNum = [0,0,0,0,0]
		this.storage.get("pizzaNum").then((val) => {
			pizzaNum = val;
			if (item == "Double")
			{
				pizzaNum[3] = pizzaNum[3] + 1
			}
			if (item == "Triple")
			{
				pizzaNum[4] = pizzaNum[4] + 1
			}
		this.storage.set("pizzaNum", pizzaNum)
		});
		alert("Added " + item + " hut to your cart!")
	}
}
