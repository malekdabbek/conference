import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Conference } from '../../Models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [FormsModule, CommonModule, ConferenceDetails], // ✅ ajout de ConferenceDetails
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchText: string = '';

  // Conférence actuellement sélectionnée (null = aucune)
  selectedConference: Conference | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Conférence sur Angular 21',
      date: '2027-11-15',
      place: 'Tunis',
      maxParticipants: 30,
      nbParticipants: 5,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Workshop sur Angular Signals',
      date: '2027-11-30',
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence Web',
      date: '2027-11-20',
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30,
    },
  ];

  // Recherche d'une conférence par titre
  get filteredConferences(): Conference[] {
    return this.conferences.filter((conf) =>
      conf.title.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }

  // Calcul des places restantes
  remainingPlaces(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }

  // Inscription à une conférence
  inscrire(conf: Conference): void {
    if (this.remainingPlaces(conf) > 0) {
      conf.nbParticipants++;
    }
  }

  // Sélection d'une conférence au clic sur la carte
  selectConference(conf: Conference): void {
    this.selectedConference = conf;
  }

  // Fermeture du détail (déclenchée par l'@Output du composant détail)
  closeDetails(): void {
    this.selectedConference = null;
  }
}