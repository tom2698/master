import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

	fullname = "";
	email = "";
	phonenumber = "";
	creditcarddetails = "";
	postcode = "";
	datepicker = "";
	pizza_list = [];
	quantity_list = [];
	cost = 0;
	myDate = "";

	constructor(private modal: ModalController, public navParams: NavParams, public storage: Storage) {
		
  }

  
	Update()
	{
		this.myDate=new Date().toISOString();
		this.pizza_list = [];
		this.quantity_list = [0,0,0,0,0];
		this.cost = 0;
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
				this.cost = this.cost + (pizzaNum[0] * 12.00);
			}
			if (pizzaNum[1] != 0)
			{	
				this.quantity_list[1] = pizzaNum[1];
				this.cost = this.cost + (pizzaNum[1] * 8.00);
			}
			if (pizzaNum[2] != 0)
			{	
				this.quantity_list[2] = pizzaNum[2];
				this.cost = this.cost + (pizzaNum[2] * 8.00);
			}
			if (pizzaNum[3] != 0)
			{	
				this.quantity_list[3] = pizzaNum[3];
				this.cost = this.cost + (pizzaNum[3] * 29.95);
			}
			if (pizzaNum[4] != 0)
			{
				this.quantity_list[4] = pizzaNum[4];
				this.cost = this.cost + (pizzaNum[4] * 39.95);
			}
		});	
		
	}
	
	storage_update()
	{
		this.storage.set("pizzaNum",this.quantity_list)
		this.cost = 0;
		if (this.quantity_list[0] != 0)
		{
			this.cost = this.cost + this.quantity_list[0] * 12.00;
		}
		if (this.quantity_list[1] != 0)
		{	
			this.cost = this.cost + this.quantity_list[1] * 8.00;
		}
		if (this.quantity_list[2] != 0)
		{	
			this.cost = this.cost + this.quantity_list[2] * 8.00;
		}
		if (this.quantity_list[3] != 0)
		{	
			this.cost = this.cost + this.quantity_list[3] * 29.95;
		}
		if (this.quantity_list[4] != 0)
		{
			this.cost = this.cost + this.quantity_list[4] * 39.95;
		}
	}
  
	ionViewDidEnter()
	{
		this.Update();
	}
  
  
	cartModal() {
		var name = this.fullname;
		var emailaddr = this.email
		var phnumber = this.phonenumber
		var card = this.creditcarddetails
		var pcode = this.postcode  
		var dte = this.myDate
		const myModal = this.modal.create('OrderModalPage', {name: name, email: emailaddr, number: phnumber, card: card, postcode: pcode, date:dte});
		myModal.present();
	}
  
	Remove(num)
	{
		this.storage.get("pizzaNum").then((val) => {
			var pizzaNum: [number] = [0,0,0,0,0];
			pizzaNum = val;
			if (this.pizza_list[parseInt(num)] == "Supreme Pizza")
			{
				pizzaNum[0] = 0
			}
			if (this.pizza_list[parseInt(num)] == "Pepperoni Pizza")
			{
				pizzaNum[1] = 0
			}
			if (this.pizza_list[parseInt(num)] == "BBQ Beef Pizza")
			{
				pizzaNum[2] = 0
			}
			this.storage.set("pizzaNum", pizzaNum)
		});	
	}
		
	deletePizza(index)
	{
		if (confirm("Delete " + this.pizza_list[index] + "?"))
		{
			this.quantity_list[index] = 0;
		}
		this.storage_update();
	}	
		
	editPizza(index)
	{//Change the pizza quantity via list click
		let newCount = prompt("Quantity", this.quantity_list[index]);
		this.quantity_list[index] = newCount;
		this.storage_update();
	}
  //try and set the selected date for the date picker so that it's not invisible -- or add an ASAP clickable radio button
}


