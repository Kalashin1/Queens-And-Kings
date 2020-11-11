import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public rowStyles = { "position" : "relative", "top": "22rem", "background-color" : "#990000"};
  public copyrightStyles = { "position" : "relative", "top" : "3rem"};
  public quickLinks = {title : "QuickLiks", links : ["About Us", "Enroll a Child", "Find a Child"]};
  public features = { title : "Features", links : ["Employment", "Blog", "Term of service"]};
  public resources = { title : "Resources", links : ["E-learning", "Talk to a Teacher", "Contact Us"]}
  public information = { title : "Information", text : "You can drop any message or request any information you want, just fill the the form and submit it we will reply you as fast as possible."};

  public footerLinks = [this.quickLinks, this.features, this.resources]
  constructor() { }

  ngOnInit(): void {
  }

}
