import { Component } from '@angular/core';

@Component({
  selector: 'lib-create-user',
  template: `Create User Form

    <button
      routerLink=".."
      class="border bg-gray-700 rounded-lg p-2 text-white ml-5">
      Back
    </button> `,
  standalone: true,
})
export class CreateUserComponent {}
