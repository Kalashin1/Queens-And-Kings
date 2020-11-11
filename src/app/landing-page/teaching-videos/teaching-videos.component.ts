import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaching-videos',
  templateUrl: './teaching-videos.component.html',
  styleUrls: ['./teaching-videos.component.scss']
})
export class TeachingVideosComponent implements OnInit {

  constructor() { }
  public teachingObj = {
      message : {
        title : 'See Our Teacher\'s Live Teaching Session',
        text : `Get a glimpse of our e-learning facilities in action, watch some of our teacher's videos to aid your child continue learning while at home or from any location` 
      },
      vid : {
        url : '../../../assets/images/about-2.jpg',
        title : 'Chemistry - Balancing Chemical Equations',
        text : 'This video focuses on how to balance chemical equations. Another opportunity to learn'
      }
  }
  ngOnInit(): void {
  }

}
