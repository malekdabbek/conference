import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  list: string[] = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  selected: string = 'Accueil';

  select(item: string) {
    this.selected = item;
  }
}