import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
  styleUrls: ['./e-learning.component.scss']
})
export class ELearningComponent implements OnInit {

  constructor() { }
  imgUrl = '../../../assets/images/content_creation_monochromatic.svg' 
  title = 'E-Learning';
  public eLearning =  [
    { 
      title : "Over 1000 videos",
      icon : "video_library",
      text : "Our library of unlimited and entertaining video"
    },
    {
      title : 'Easy Access', 
      icon : "accessibility",
      text : "Our videos can be accessed from any location and destination"
    },
    {
      title : "Creative Videos",
      icon : "assignment_turned_in", 
      text : "Our videos are highly creative with visual and audio enhancements"
    },
    {
      title : "Course Files", 
      icon : "bookmark",
      text : "Lesson notes to compliment online videos are available with each lesson"
    }
  ]
  ngOnInit(): void {
  }

}
