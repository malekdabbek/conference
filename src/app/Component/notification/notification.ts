import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  notifications = [
    { id: 1, message: 'You have a new friend request.' },
    { id: 2, message: 'Your profile has been updated successfully.' },
    { id: 3, message: 'You have a new message from John.' },
  ]
  

  show=false;
  buttonText = 'Show Notifications';

  showNotifications() {
    this.show = !this.show;
    this.buttonText = this.show ? 'Hide Notifications' : 'Show Notifications';

  }

}
