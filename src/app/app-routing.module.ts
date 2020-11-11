import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentSignupComponent as EnrollStudentComponent } from './student-signup/student-signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component'


const routes: Routes = [
    
    { path : 'landing', component :LandingPageComponent},
    { path : 'about', component: AboutPageComponent },
    { path : 'home', component : HomePageComponent },
    { path : 'enroll-student', component : EnrollStudentComponent},
    { path: 'contact', component: ContactPageComponent}
    // { path : '', redirectTo : 'home', pathMatch : 'full'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
