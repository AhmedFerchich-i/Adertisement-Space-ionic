import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.page.html',
  styleUrls: ['./user-ads.page.scss'],
})
export class UserAdsPage {
 
  userAds = []
 
  uid : any;
  constructor(public router:Router,
              public afAuth : AngularFireAuth,
              public DB : AngularFireDatabase) {
   
    this.afAuth.authState.subscribe(user => {
    this.uid = user.uid; // connected user ID
    
  })
  this.getUserAds();
  }
  addNewItem()
  {
    //add-new interface
    this.router.navigateByUrl('add-new');
  }

  //ending user session
  logout()
  {
     return this.afAuth.signOut().then(() => {
      this.uid = ''
      this.router.navigateByUrl('home');
    })
  }
  //Fetching Data from the DB.
  getUserAds()
  {//always detecting changes and reloading the data with child_added and child_removed.
    this.DB.list('Ads/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.userAds= [];  
      actions.forEach(action => {
          if(action.payload.exportVal().user_id == this.uid){//==> filter on connected user id.
            this.userAds.push({
              key: action.key,
              name: action.payload.exportVal().name,
              category: action.payload.exportVal().category,
              
              uid: action.payload.exportVal().user_id
            });
          }
      });
    });
  }

}

