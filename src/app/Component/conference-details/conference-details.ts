import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {

  // Parent → enfant : la conférence à afficher
  @Input() conference: Conference | null = null;

  // Enfant → parent : demande de fermeture du détail
  @Output() closed = new EventEmitter<void>();

  // Enfant → parent : demande d'inscription à la conférence affichée
  @Output() registered = new EventEmitter<Conference>();

  remainingPlaces(): number {
    if (!this.conference) return 0;
    return this.conference.maxParticipants - this.conference.nbParticipants;
  }

  close(): void {
    this.closed.emit();
  }

  register(): void {
    if (this.conference && this.remainingPlaces() > 0) {
      this.registered.emit(this.conference);
    }
  }
}