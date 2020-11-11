import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-info',
  templateUrl: './first-info.component.html',
  styleUrls: ['./first-info.component.scss']
})
export class FirstInfoComponent implements OnInit {

  constructor() { }
  public firstInfo = {
    title : 'Queens And Kings Nursery, Primary and Secondary School, established since 1903',
    details : 'Let us groom your child/ward into leaders that are better prepared to shape tomorrow. We value your child and we provide the education that your child needs. Let us groom your child/ward into leaders that are better prepared to shape tomorrow. We value your child and we provide the education that your child needs. Let us groom your child/ward into leaders that are better prepared to shape tomorrow. We value your child and we provide the education that your child needs. Let us groom your child/ward into leaders that are better prepared to shape tomorrow. We value your child and we provide the education that your child needs.', 
    photoUrl : '../../../assets/images/trung-pham-quoc-YDWwCkdmcKM-unsplash.jpg'
  }
  ngOnInit(): void {
  }

}
 