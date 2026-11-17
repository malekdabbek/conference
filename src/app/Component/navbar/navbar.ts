import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  list: string[] = ['Accueil', 'Conférences', 'Amis', 'Profil', 'Notifications', 'Admin'];
}