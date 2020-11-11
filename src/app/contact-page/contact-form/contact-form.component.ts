import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
  public contact = { title : 'Contact Us', message : 'Contact us concerning the enrollment of your child/ward. We reply as fast as possible.' }
  ngOnInit(): void {
  }

}
