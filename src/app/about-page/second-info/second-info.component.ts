import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-info',
  templateUrl: './second-info.component.html',
  styleUrls: ['./second-info.component.scss']
})
export class SecondInfoComponent implements OnInit {

  constructor() { }

  public secondInfo = {
    title : 'Queens And Kings Nursery, Primary and Secondary School, established since 1903',
    details : 'Let us groom your child/ward into leaders that are better prepared to shape tomorrow. We value your child and we provide the education that your child needs. Let us groom your child/ward into leaders that are better prepared to shape tomorrow. We value your child and we provide the education that your child needs. Let us groom your child/ward into leaders that are better prepared to shape tomorrow. We value your child and we provide the education that your child needs. Let us groom your child/ward into leaders that are better prepared to shape tomorrow. We value your child and we provide the education that your child needs.', 
    photoUrl : '../../../assets/images/about-2.jpg'
  }

  ngOnInit(): void {
    
  }

}
