import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import {Task} from '../../Task';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  dateandtime!:string;
  tprice!:string;
  edesc!:string;
  hostname!:string;
  location!:string;
  reminder: boolean = false;
  showAddEvent!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddEvent = value));
   }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.text) {
      alert('Please add a task!');
      return;
    }
    
    const newTask = {
      text: this.text,
      dateandtime: this.dateandtime,
      tprice: this.tprice,
      edesc: this.edesc,
      hostname: this.hostname,
      location: this.location,
      reminder: this.reminder 
    } 
    this.onAddTask.emit(newTask);
    
    this.text = '';
    this.dateandtime = '';
    this.tprice = '';
    this.edesc = '';
    this.hostname = '';
    this.location = '';
    this.reminder = false;
  }



}
