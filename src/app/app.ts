import { Component } from '@angular/core';
import { Header } from './Component/header/header';
import { Navbar } from './Component/navbar/navbar';
import { Profile } from './Component/profile/profile';
import { Friends } from './Component/friends/friends';
import { Notification } from './Component/notification/notification';
import { ConferenceList } from './Component/conference-list/conference-list';
import { Footer } from './Component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Profile, Friends, Notification, ConferenceList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}