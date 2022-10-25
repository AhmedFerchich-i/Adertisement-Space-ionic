import { Component, OnInit } from '@angular/core';
import { adsService } from '../ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
allAds = [];
  

 constructor(private ads: adsService) {}
     
  
  ngOnInit(): void {
    

    this.ads.getAllAds().subscribe({
      next: (response) => {
        console.log(response);
        this.allAds = [];
        for (const key in response) {
          this.allAds.push({ id: key, ...response[key] });
        }
        console.log(this.allAds);
      },
    });
  }
  }