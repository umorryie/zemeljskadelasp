import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { ContainerComponent} from './container/container.component';
import { CardComponent } from './card/card.component';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ContainerComponent,
    ProfilepictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
