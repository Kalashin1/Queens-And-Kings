import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
    public bannerMsg = 'Let us groom your child/ward into leaders that are better prepared to shape our tomorrow. We value your child and we provide the education your child needs.';
    
    public bannerTitle = 'Nursery, Primary and Secondary Education';
  constructor() { }

  ngOnInit(): void {
  }

}
