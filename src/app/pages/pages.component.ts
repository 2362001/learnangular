import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  constructor(private router: Router) {}
  isCollapsed = false;
  menu: any[] = [
    {
      value: '/dashboard',
      title: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          value: 'exercise',
          title: 'Exercise',
        },
      ],
    },
    {
      value: '/form',
      title: 'Form',
      icon: 'form',
      children: [
        {
          value: '/basic-form',
          title: 'Basic Form',
        },
      ],
    },
  ];

  onLogout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/login']);
  }
}
