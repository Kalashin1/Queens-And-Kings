import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public offers: {icon_name, header, color, text}[] = [];
  public colors ;
  constructor() { }

  ngOnInit(): void {
    this.offers = [{
      icon_name : "accessibility",
      header : "Certified Teachers",
      color : "#003300",
      text : "You can be sure that your child is being tutored by the best teachers."
    },
    {
      icon_name : "assignment_turned_in",
      header : "Standard Classes",
      color : "#F62A00",
      text : "Modern classrooms that will make learning very comfortable and worthwhile."
    },
    {
      icon_name : "accessible",
      header : "Sports Facilities",
      color : "#003300",
      text : "Your child's physical health is important to us, we have required sports facilities"
    },
    {
      icon_name : "rowing",
      header : "Creative Lessons",
      color : "#F62A00",
      text : "Our lessons are designed to be engaging and fun with a lot of creativity."
    }]

    this.colors = {"background" : this.offers.forEach(offer => {
      return offer.color
    })};

    }

  }
