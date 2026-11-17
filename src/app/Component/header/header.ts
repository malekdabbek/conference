import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('Conference');
  msg=signal('Welcome to you user dashboard');
}
