import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { WelcomeComponent } from './layouts/components/welcome/welcome.component';
import { AboutUsComponent } from './layouts/components/about-us/about-us.component';
import { ServicesComponent } from './layouts/components/services/services.component';
import { TestyMonialsComponent } from './layouts/components/testy-monials/testy-monials.component';
import { ContactUsComponent } from './layouts/components/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WelcomeComponent,
    AboutUsComponent,
    ServicesComponent,
    TestyMonialsComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
