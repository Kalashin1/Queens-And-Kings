import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  divOneStyles = {"justify-content": "flex-start" ,"align-items" : "flex-end"};
  schoolName = "queens and kings";
  contacts = [
    { title : "Email", contact : "email@theQueensAndKings.com", icon : "email"},
    { title : "Phone", contact : "+234567890", icon : "phone"}
  ];
  links: string[] = ["home", "about", "contact", "enroll-student"];

  constructor() { }

  ngOnInit(): void {

  }

}
