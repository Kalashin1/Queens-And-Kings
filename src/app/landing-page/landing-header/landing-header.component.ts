import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  landingTitle = 'We Make Leaders that tomorrow needs';

  landingText = 'Let us groom your child/ward into leaders that are better equipped to shape our tomrrow. We value your child and provide the education your child requires.';

  illustrationUrl = "../../../assets/images/maths.png";

  facilities = [
    { 
      title : "Qualified Teachers",
      text : "We have qualified teachers that are well trained and prepared to educate your child"
    },
    {
      title : "Modern Facilities", 
      text : "Our learning environment consists of the most modern learning facilities to aid your child's learning process"
    },
    {
      title : "E-Learning", 
      text : "Your child can be educated from anywhere. We offer e-learning facilities that makes learning fun"
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
