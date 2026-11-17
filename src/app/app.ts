import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Component/header/header';
import { Navbar } from './Component/navbar/navbar';
import { Friends } from './Component/friends/friends';
import { Profile } from './Component/profile/profile';
import { Notification } from './Component/notification/notification';
import { Footer } from './Component/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Friends, Profile, Notification, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('conference');
}