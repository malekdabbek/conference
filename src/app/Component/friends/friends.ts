import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friendsList = [
    { name: 'Alice', gmail: 'alice@gmail.com' },
    { name: 'Bob', gmail: 'bob@gmail.com' },
    { name: 'Charlie', gmail: 'charlie@gmail.com' },
  ];
}