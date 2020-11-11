import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  constructor() { }
  public parallaxImg = '../../../assets/images/green-chameleon-s9CC2SKySJM-unsplash.jpg'
  ngOnInit(): void {
  }

}
