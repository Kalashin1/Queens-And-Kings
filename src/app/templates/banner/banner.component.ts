import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-small',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class SmallBannerComponent implements OnInit {
  public title;
  public bannerText;
  constructor() { }

  ngOnInit(): void {

    this.title = "Quote of the day";
    this.bannerText = '"A mind needs Books like a sword needs a whetstone if it is to keep its edge"'
  }

}
