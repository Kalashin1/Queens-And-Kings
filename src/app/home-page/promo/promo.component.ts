import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  public title = "What we offer";

  public text = "Let us groom your child/ward into leaders that are beter prepared to shape our tomorrow. We value your child and we provide the educatoin that your child needs.";

  public imageUrl = "../../../assets/images/about.jpg";

  public promos : Object[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.promos = [
      {
        icon_name : "video_library",
        header : "E-Learning",
        text : "Our library of unlimited educative and engaging videos."
      },
      {
        icon_name : "accessibility",
        header : "Easy Access",
        text : "Our videos can be accessed from any location."
      },
      {
        icon_name : "assignment_turned_in",
        header : "Creative Videos",
        text : "Our videos are highly creative with a lot visual and audio enhancement."
      },
      {
        icon_name : "check_circle",
        header : "Course Files",
        text : "Lesson notes to compliment online videos are also available with each video."
      },
      {
        icon_name : "dashboard",
        header : "Modern Classes",
        text : "Our classes are built with modern designs to guarantee comfort."
      },
      {
        icon_name : "description",
        header : "Sports Facilities",
        text : "Your child's physical health is important to us, we have required sports facilities."
      }
    ]
  }

}
