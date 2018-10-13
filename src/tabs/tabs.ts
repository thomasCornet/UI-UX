import { Component ,ViewChild} from '@angular/core';
import { NavController ,Slides} from 'ionic-angular';
import {RelancesPage} from '../pages/relances/relances';
import {ProspectsPage} from '../pages/prospects/prospects';
import {OutilsPage} from '../pages/outils/outils';
import {ClientsPage} from '../pages/clients/clients';
import {ParametresPage} from '../pages/parametres/parametres';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
 @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  RelancesPage:any = RelancesPage;
  ProspectsPage:any = ProspectsPage;
  OutilsPage:any = OutilsPage;
  ClientsPage:any = ClientsPage;
  ParametresPage:any = ParametresPage;

  constructor(public navCtrl: NavController) {
    this.tabs=["megaphone","people","eye","hammer","settings"];
    
  }
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

 

}