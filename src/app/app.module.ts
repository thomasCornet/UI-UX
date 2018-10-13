import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RelancesPage } from '../pages/relances/relances';
import { ClientsPage } from '../pages/clients/clients';
import { ProspectsPage } from '../pages/prospects/prospects';
import { OutilsPage } from '../pages/outils/outils';
import { ParametresPage } from '../pages/parametres/parametres';


import { TabsPage } from '../tabs/tabs'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RelancesPage,
    ClientsPage,
    ProspectsPage,
    OutilsPage,
    ParametresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RelancesPage,
    TabsPage,
    ClientsPage,
    ProspectsPage,
    OutilsPage,
    ParametresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
