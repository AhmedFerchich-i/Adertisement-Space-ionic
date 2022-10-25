import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore/firestore'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class FireserviceService {
  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    private http: HttpClient
  ) {}
  loginWithEmail(data) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data) {
    return this.firestore.collection("users").doc(data.uid).set(data);
  }
  getDetails(data) {
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }
  
}
export class adsService {
  constructor(private http: HttpClient) { }

  getAllAds() {
    //badel el lien
    return this.http.get('https://ad-management-8d0b1.firebaseio.com/Ads.json');
  }
}