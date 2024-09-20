import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DashboardComponent,DatepickerComponent,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
