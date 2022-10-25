import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth'


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  ad : string;
  category : string;
 
  uid : string;
  constructor(public router:Router,
              public afAuth : AngularFireAuth,
              public DB : AngularFireDatabase) { }

  ngOnInit() {
  }
  Cancel(){
    this.router.navigateByUrl('home');
  }
  
  
  add()
  {
  this.afAuth.authState.subscribe(user => {
    this.uid = user.uid; // getting the current user id.
    //console.log('user : '+ this.uid + ' ad : ' + this.ad + " category : " + this.category );
    this.DB.list('Ads/').push({
      user_id : this.uid,
      name: this.ad,
      category : this.category
  });})
  this.router.navigateByUrl('home');
  }}