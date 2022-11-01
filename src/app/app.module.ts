import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { EventsComponent } from './components/events/events.component';
import { ProductItemComponent } from './components/task-item/task-item.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

const AppRoutes:Routes = [
  {path: '', component: EventsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EventsComponent,
    ProductItemComponent,
    AddEventComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {enableTracing: true}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
