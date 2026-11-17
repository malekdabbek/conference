import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Events } from './events/events';
import { Navbar } from './navbar/navbar';
import { Banner } from './banner/banner';
import { ListConf } from './list-conf/list-conf';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Events,Navbar,Banner,ListConf,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conference');
}
