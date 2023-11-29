import { Component } from '@angular/core';

@Component({
  selector: 'lib-dashboard',
  template: `Dashboard

    <button
      routerLink="create-user"
      class="border bg-gray-700 rounded-lg p-2 text-white ml-10">
      Create User
    </button> `,
  standalone: true,
})
export class DashboardComponent {}
