import { Component ,ViewChild} from '@angular/core';
import { NavController ,Slides} from 'ionic-angular';

@Component({
  selector: 'page-relances',
  templateUrl: 'relances.html'
})
export class RelancesPage {

todayList=false;
 
  constructor(public navCtrl: NavController) {
  
  }
 
 today(){
  this.todayList= !this.todayList
  console.log(this.todayList)
 }

}