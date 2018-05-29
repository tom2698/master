import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dietary-modal1',
  templateUrl: 'dietary-modal1.html',
})
export class DietaryModal1Page {


  constructor( public params: NavParams, private view: ViewController ) {
  }
	
 
  info = this.params.get('info');
  
  closeModal(){ /** Close the modal screen when the close button is pressed */
	this.view.dismiss();
  }

}
