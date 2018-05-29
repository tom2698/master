import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	names=[];
	addresses = [];
	emails = [];
	numbers = [];
	messages = [];
	images = [];
	newsletters = [];
	fname = ""
	faddress = ""
	femail = ""
	fnumber = ""
	fmessage = ""
	imageFile = "";
	fnewsletter: boolean;
	imageUploaded = 0;

	constructor(public navCtrl: NavController, public storage: Storage) {

	}
	
	ionViewDidEnter()
	{
		this.imageUploaded = 0;
		this.storage.get("names").then((val) => {
			if (val != null)
			{
				this.names = val;
			}
			else
			{
				this.names = [];
			}
		});	
		this.storage.get("addresses").then((val) => {
			if (val != null)
			{
				this.addresses = val;
			}
			else
			{
				this.addresses = [];
			}
		});	
		this.storage.get("emails").then((val) => {
			if (val != null)
			{
				this.emails = val;
			}
			else
			{
				this.emails = [];
			}
		});	
		this.storage.get("numbers").then((val) => {
			if (val != null)
			{
				this.numbers = val;
			}
			else
			{
				this.numbers = [];
			}
		});	
		this.storage.get("messages").then((val) => {
			if (val != null)
			{
				this.messages = val;
			}
			else
			{
				this.messages = [];
			}
		});	
		this.storage.get("images").then((val) => {
			if (val != null)
			{
				this.images = val;
			}
			else
			{
				this.images = [];
			}
		});	
		this.storage.get("newsletters").then((val) => {
			if (val != null)
			{
				this.newsletters = val;
			}
			else
			{
				this.newsletters = [];
			}
		});	
	}
	
	Send()
	{
		//Add the variables to a list
		this.names.push(this.fname);
		this.storage.set("names", this.names);
		this.addresses.push(this.faddress);
		this.storage.set("addresses", this.addresses);
		this.emails.push(this.femail);
		this.storage.set("emails", this.emails);
		this.numbers.push(this.fnumber);
		this.storage.set("numbers", this.numbers);
		this.messages.push(this.fmessage);
		this.storage.set("messages", this.messages);
		if (this.fnewsletter == true)
		{
			this.newsletters.push("Yes");
		}
		else
		{
			this.newsletters.push("No");
		}
		this.storage.set("newsletters", this.newsletters);
		if (this.imageUploaded == 0)
		{
			this.images.push("No Image");
			this.storage.set("images", this.images);
		}
		alert("Sent message");
	}
	
	imageSelected(files)
	{
		let fileReader = new FileReader();
		fileReader.onload = e => {
			this.imageFile = fileReader.result;
			this.images.push(this.imageFile);
			this.storage.set('images',this.images);
			this.imageUploaded = 1;
		};
		fileReader.readAsDataURL(files[0]);
	}
}
