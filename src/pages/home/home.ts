import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	pizzaNum = [];
	quan1 = "";
	quan2 = "";
	quan3 = "";
	
	constructor(private modal: ModalController, public storage: Storage) {
		//Update the pizzaNum list
		storage.get("pizzaNum").then((val) => {
			var pizzaNum: [number] = [0,0,0,0,0];
			pizzaNum = val;
			if (!pizzaNum)
			{
				this.storage.set("pizzaNum", [0,0,0,0,0])//Supreme, Pepperoni, BBQ Beef
			}
		});
	}
  
	AddToCart(pizza)
	{
		var pizzaNum = []
		this.storage.get("pizzaNum").then((val) => {
			pizzaNum = val;
			if (pizza == "Supreme")
			{
				pizzaNum[0] = parseInt(pizzaNum[0]) + parseInt(this.quan1)
			}
			if (pizza == "Pepperoni")
			{
				pizzaNum[1] = parseInt(pizzaNum[1]) + parseInt(this.quan2)
			}
			if (pizza == "BBQ Beef")
			{
				pizzaNum[2] = parseInt(pizzaNum[2]) + parseInt(this.quan3)
			}
			this.storage.set("pizzaNum", pizzaNum)
		});
		alert("Added " + pizza + " pizza to your cart!")
		
		
  }
  
  DietaryModal1() { /** Sends the specific information of a pizza for the modal screen */
	  const myModal = this.modal.create('DietaryModal1Page', {info: "Smoky honey ham, pepperoni, Italian sausage, lightly seasoned beef, mushrooms, Kalamata olives, juicy pineapple, green capsicum & onion : Calories:7805kJ"});
	  myModal.present();
  }
  
  DietaryModal2() { /** Sends the specific information of a pizza for the modal screen */
	  const myModal = this.modal.create('DietaryModal1Page', {info: "Lots of pepperoni & mozzarella : Calories:8358kJ "});
	  myModal.present();
  }
  
  DietaryModal3() { /** Sends the specific information of a pizza for the modal screen */
	  const myModal = this.modal.create('DietaryModal1Page', {info: "Lightly seasoned beef & mozzarella on rich BBQ sauce : Calories:8753kJ"});
	  myModal.present();
  }

}