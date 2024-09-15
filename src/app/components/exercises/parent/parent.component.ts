import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';


// Emitter

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {

  myNumber: number = 0;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10 )
  }

}
