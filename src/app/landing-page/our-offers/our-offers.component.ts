import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-offers',
  templateUrl: './our-offers.component.html',
  styleUrls: ['./our-offers.component.scss']
})
export class OurOffersComponent implements OnInit {
  illustrationUrl = '../../../assets/images/undraw_learning_2q1h.svg';

  title = 'What We Offer';

  offers =  [
    { 
      title : "Qualified Teachers",
      icon : "shopping_cart",
      text : "We have qualified teachers that are well trained and prepared to educate your child"
    },
    {
      title : 'Standard Classes', 
      icon : "shopping_cart",
      text : "Our learning environment consists of the most modern learning facilities to aid your child's learning process"
    },
    {
      title : "Sports Facilities",
      icon : "shopping_cart", 
      text : "Your child's physical health is important to us, we have required sports facilities"
    },
    {
      title : "Creative Lessons", 
      icon : "shopping_cart",
      text : "Our lessons are designed to be engaging and fun with a lot of creativity"
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
