import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PersonListComponent} from "./person/person-list/person-list.component";
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SharedRoutingModule } from './shared/shared-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        PersonListComponent,
        PersonCreateComponent,
        PersonEditComponent,
        FooterComponent,
        NavbarComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
