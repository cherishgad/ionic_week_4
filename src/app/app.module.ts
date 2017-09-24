import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';

export const firebaseConfig = { 
  apiKey: "AIzaSyCWNyAHXcJU6UQ9-iw466YouiFvx1tyEl0",
  authDomain: "ionic2do-1a12c.firebaseapp.com",
  databaseURL: "https://ionic2do-1a12c.firebaseio.com",
  projectId: "ionic2do-1a12c",
  storageBucket: "ionic2do-1a12c.appspot.com",
  messagingSenderId: "982032414756"
};
@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

