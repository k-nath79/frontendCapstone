import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foodform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './foodform.component.html',
  styleUrl: './foodform.component.css'
})
export class FoodformComponent {
  @Output() viewChangeEventEmitter : EventEmitter<any> = new EventEmitter();
  
  handleSubmit(){
    console.log("handle submit food");
    this.viewChangeEventEmitter.emit(1);
  }
}
