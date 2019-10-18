import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  imports: [CommonModule]
})
export class DataAccessModule {

  // static initialize(firebaseConfig: any) {
  //   return {
  //     ngModule: DataAccessModule,
  //     imports: [
  //       AngularFireModule.initializeApp(firebaseConfig),
  //       AngularFirestoreModule
  //     ],
  //     providers: [
  //       AngularFirestore
  //     ]
  //   }
  // }

}
