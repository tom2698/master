import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-order-modal',
  templateUrl: 'order-modal.html',
})
export class OrderModalPage {
	cost = 0
	pizza_list = []
	quantity_list = []
	
	constructor( public params: NavParams, private view: ViewController, public storage: Storage ) {
	}
	
	
	fullname = this.params.get('name');
	email = this.params.get('email');
	phonenumber = this.params.get('number');
	postcode = this.params.get('postcode');
	card = this.params.get('card');
	date = this.params.get('date');

    closeModal(){ /** Close the modal screen when the close button is pressed */
		this.view.dismiss();
	}
	
	ionViewDidEnter()
	{
		this.pizza_list = [];
		this.quantity_list = [0,0,0,0,0];
		this.storage.get("pizzaNum").then((val) => {
			var pizzaNum: [number] = [0,0,0,0,0];
			pizzaNum = val;
			if (!pizzaNum)
			{
				this.storage.set("pizzaNum", [0,0,0,0,0])//Supreme, Pepperoni, BBQ Beef, Double Hut, Triple Hut
			}
			this.pizza_list.push("Supreme Pizza");
			this.pizza_list.push("Pepperoni Pizza");
			this.pizza_list.push("BBQ Beef Pizza");
			this.pizza_list.push("Double Hut");
			this.pizza_list.push("Triple Hut");
			if (pizzaNum[0] != 0)
			{
				this.quantity_list[0] = pizzaNum[0];
				this.cost = this.cost + pizzaNum[0] * 12.00;
			}
			if (pizzaNum[1] != 0)
			{	
				this.quantity_list[1] = pizzaNum[1];
				this.cost = this.cost + pizzaNum[1] * 8.00;
			}
			if (pizzaNum[2] != 0)
			{	
				this.quantity_list[2] = pizzaNum[2];
				this.cost = this.cost + pizzaNum[2] * 8.00;
			}
			if (pizzaNum[3] != 0)
			{	
				this.quantity_list[3] = pizzaNum[3];
				this.cost = this.cost + pizzaNum[3] * 29.95;
			}
			if (pizzaNum[4] != 0)
			{
				this.quantity_list[4] = pizzaNum[4];
				this.cost = this.cost + pizzaNum[4] * 39.95;
			}
		});	
		//Deal with the details
		if (this.card == "")
		{
			this.card="Pay on pickup";
		}
	}

}