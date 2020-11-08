import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { ContainerComponent} from './container/container.component';
import { CardComponent } from './card/card.component';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ContainerComponent,
    ProfilepictureComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }