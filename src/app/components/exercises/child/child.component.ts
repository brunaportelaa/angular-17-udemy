import { Component, Output, EventEmitter } from '@angular/core';

// Change Number
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {

  @Output() changeNumber = new EventEmitter();

  handleClick() {
    this.changeNumber.emit()
  };

}
