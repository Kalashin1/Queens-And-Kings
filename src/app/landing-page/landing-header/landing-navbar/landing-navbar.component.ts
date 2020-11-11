import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit {
  links: string[] = ["Home", "About", "Contact", "Enroll Your Child"];
  constructor() { }

  ngOnInit(): void {
  }

}
