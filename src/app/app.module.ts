import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { OffersComponent } from './home-page/offers/offers.component';
import { PromoComponent } from './home-page/promo/promo.component';
import { SmallBannerComponent } from './templates/banner/banner.component'
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { SignupFormComponent } from './student-signup/signup-form/signup-form.component';

import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingHeaderComponent } from './landing-page/landing-header/landing-header.component';
import { LandingNavbarComponent } from './landing-page/landing-header/landing-navbar/landing-navbar.component';
import { OurOffersComponent } from './landing-page/our-offers/our-offers.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BreadcrumbsComponent } from './templates/breadcrumbs/breadcrumbs.component';
import { FirstInfoComponent } from './about-page/first-info/first-info.component';
import { SecondInfoComponent } from './about-page/second-info/second-info.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-page/contact-form/contact-form.component';
import { ParallaxComponent } from './templates/parallax/parallax.component';
import { TeachingVideosComponent } from './landing-page/teaching-videos/teaching-videos.component';
import { ELearningComponent } from './landing-page/e-learning/e-learning.component';
import { ContactComponent } from './landing-page/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    NavbarComponent,
    BannerComponent,
    OffersComponent,
    PromoComponent,
    StudentSignupComponent,
    SmallBannerComponent,
    SignupFormComponent,
    LandingPageComponent,
    LandingHeaderComponent,
    LandingNavbarComponent,
    OurOffersComponent,
    AboutPageComponent,
    BreadcrumbsComponent,
    FirstInfoComponent,
    SecondInfoComponent,
    ContactPageComponent,
    ContactFormComponent,
    ParallaxComponent,
    TeachingVideosComponent,
    ELearningComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
