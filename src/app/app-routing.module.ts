import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { ProductItemComponent } from './components/task-item/task-item.component';

const routes: Routes = [
  { path: 'taskitem', component: ProductItemComponent},
  {  path: 'events', component: EventsComponent } 
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
  
})

export class AppRoutingModule { }
