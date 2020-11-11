import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  obj = {
    title : "Leave Us With A Message, We'll Reply", 
    text : "You can drop any message or request any information you want, just fill out the form and submit it, we'll reply you as fast we possibly can."
  }
  ngOnInit(): void {
  }

}
