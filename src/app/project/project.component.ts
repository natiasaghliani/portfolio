import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlHandlingStrategy } from '@angular/router';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit{
  // projectId: number | null = null;
  angularProjects: Project[] = [
    {
      title: 'Number Selection Game',
      description: 'An interactive number game developed in Angular.',
      imageUrl: '../../assets/images/game1-100.png',  
      link: 'https://game1-100.netlify.app/'
    },
    {
      title: 'Weather App',
      description: 'A weather app built with Angular and OpenWeatherMap API.',
      imageUrl: '../../assets/images/weather-app.png',  
      link: 'https://my-weather-app-natia.netlify.app/'
    },
    {
      title: 'User Dashboard with API-Driven Posts and To-Do Lists',
      description: 'A platform that displays user profiles, posts, and to-do lists, all fetched through an API integration.',
      imageUrl: '../../assets/images/users-post.png',  
      link: 'https://user-todo-list-natia.netlify.app/'
    },
    {
      title: 'Online Shopping Platform',
      description: 'An eCommerce app with easy product browsing, API-driven listings, and a seamless checkout experience.',
      imageUrl: '../../assets/images/shopping.png',  
      link: 'https://master--n-e-comm.netlify.app/'
    },
    {
      title: 'User Info Cards with API Integration',
      description: 'Displays user info cards with data fetched from an API, showcasing key details about each user.',
      imageUrl: '../../assets/images/users.png',  
      link: 'https://custom-users.netlify.app/'
    },
    {
      title: 'User Management with NgRx State Management',
      description: 'An app that allows adding users and displaying a list of added users, managed efficiently with NgRx for state control.',
      imageUrl: '../../assets/images/add-user.png',  
      link: 'https://custom-users-management.netlify.app/'
    }
  ]

  jsProjects: Project[] = [
    {
      title: 'Rock Paper Scissors Game',
      description: 'A classic Rock Paper Scissors game built with JavaScript, featuring simple controls and real-time results for an interactive experience.',
      imageUrl: '../../assets/images/rps.png',  
      link: 'https://natiasaghliani.github.io/rock-paper-scissor-JS/'
    },{
      title: 'ATM Simulation with JavaScript',
      description: 'A JavaScript-based ATM simulation where users can select an account, view balances, and perform deposit or withdrawal transactions.',
      imageUrl: '../../assets/images/atm.png',  
      link: 'https://natiasaghliani.github.io/ATM-Project/'
    },
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.projectId = Number(params.get('id'));
    //   // You could load more project details here based on the ID
    // });
  }
}
