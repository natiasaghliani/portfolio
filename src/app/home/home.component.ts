import { Component } from '@angular/core';

interface Project {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects: Project[] = [
    { id: 1, name: 'Number Selection Game', description: 'An interactive game where players select numbers in order from 1 to 100.' },
    { id: 2, name: 'Weather Application', description: 'A weather application using the OpenWeatherMap API to display current weather information.' }
  ];

  constructor() { }

  ngOnInit(): void { }

}
