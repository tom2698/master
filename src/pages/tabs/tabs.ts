import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CartPage } from '../cart/cart';
import {OffersPage } from '../offers/offers';
import {StoreTrackerPage} from '../store-tracker/store-tracker';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = OffersPage;
  tab4Root = StoreTrackerPage;
  tab5Root = ContactPage;
  tab6Root = AboutPage;

  constructor() {

  }
}
