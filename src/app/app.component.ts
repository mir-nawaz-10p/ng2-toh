import { Component } from '@angular/core';

@Component({
  selector: 'hero-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes!';
  menus = [
    {
      route: '/dashboard',
      title: 'Dashboard'
    },
    {
      route: '/heroes',
      title: 'Heroes'
    },
    {
      route: '/create',
      title: 'Create'
    }
  ];
}
