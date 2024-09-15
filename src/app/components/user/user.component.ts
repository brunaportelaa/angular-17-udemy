import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  
  id = input.required<string>()
  avatar = input.required<string>()
  name = input.required<string>()

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })

  onSelectedUser() {
    
    
  }


}
