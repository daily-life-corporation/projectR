import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';

import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyBTegoEOP0_fYeSCnuHJbDRN6eZonOQmGs',
  authDomain: 'armevolution-e60b8.firebaseapp.com',
  databaseURL: 'https://armevolution-e60b8.firebaseio.com',
  projectId: 'armevolution-e60b8',
  storageBucket: 'armevolution-e60b8.appspot.com',
  messagingSenderId: '167921591548'
};
firebase.initializeApp(config);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
