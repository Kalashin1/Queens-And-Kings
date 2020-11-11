import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  title = "Enroll your child";

  public class = ["Creche", 'Nursery1', 'Nursery2', 'Nursery3', 'Basic1', 'Basic2', 'Basic3', "Basic4", 'Basic5', 'Jss1', 'Jss2', 'Jss3', 'Sss1', 'Sss2', 'Sss3']
  constructor() { }

  ngOnInit(): void {
  }

}
