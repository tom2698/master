import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google;

@IonicPage()
@Component({
  selector: 'page-store-tracker',
  templateUrl: 'store-tracker.html',
})
export class StoreTrackerPage {

	postcode = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  @ViewChild('map')mapElement;
  map: any;
  
   Move()
  {
	  let loc = new google.maps.LatLng(-27.54929076, 153.07554378);//Default value
	  if (this.postcode == "4122")
	  {
		  loc = new google.maps.LatLng(-27.54929076, 153.07554378);
	  }
	  else if (this.postcode == "4121")
	  {
		  loc = new google.maps.LatLng(-27.51508749, 153.05940761);
	  }
	  else if (this.postcode == "4107")
	  {
		  loc = new google.maps.LatLng(-27.55063391, 153.02050846);
	  }
	  else//Default to mount gravatt
	  {
		  loc = new google.maps.LatLng(-27.54929076, 153.07554378);
		  alert("No stores at specified postcode")
	  }  
	  let mapOptions = {
		  center: loc,
		  zoom: 13,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	  
	  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);	
	   //Adding the pizza store markers
		var locations = [
		['Marios Pizza Mt Gravatt', -27.55495705, 153.08060305, 3],
		['Marios Pizza Holland Park', -27.52941598, 153.07226004, 2],
		['Marios Pizza Coopers Plains', -27.55785352, 153.04192505, 1],
		];
		
		var marker, i;
		var infowindow = new google.maps.InfoWindow();

		for (i = 0; i < locations.length; i++) {  
			marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: this.map
			});
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(this.map, marker);
			}
			})(marker, i));
		}  
  }
  
  
  
  ionViewDidLoad() 
  {
	  let latLng = new google.maps.LatLng(-34.9290, 138.6010);
	  
	  let mapOptions = {
		  center: latLng,
		  zoom: 13,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	  
	  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);	
		if (navigator.geolocation)
		{
			//API AVAILABLE
			navigator.geolocation.getCurrentPosition(position => {
				//do something with the position
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				}
				this.map.setCenter(pos);
			});
		}
		else
		{
			alert("Geolocation not supported");
		}
		 //Adding the pizza store markers
		var locations = [
		['Marios Pizza Mt Gravatt', -27.55495705, 153.08060305, 3],
		['Marios Pizza Holland Park', -27.52941598, 153.07226004, 2],
		['Marios Pizza Coopers Plains', -27.55785352, 153.04192505, 1],
		];
		
		var marker, i;
		var infowindow = new google.maps.InfoWindow();

		for (i = 0; i < locations.length; i++) {  
			marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: this.map
			});
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(this.map, marker);
			}
			})(marker, i));
		}  
	}
}

