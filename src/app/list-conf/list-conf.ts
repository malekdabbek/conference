import { Component } from '@angular/core';
import { ListIntervenants } from '../list-intervenants/list-intervenants';
import { Search } from '../search/search';

@Component({
  selector: 'app-list-conf',
  imports: [Search, ListIntervenants],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {}
