import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerosComponent } from './heros/heros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HerosComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heros';
}
