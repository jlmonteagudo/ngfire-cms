import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { DataAccessModule } from '@ngfire-cms/data-access';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    // DataAccessModule.initialize(environment.firebase),
    DataAccessModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
