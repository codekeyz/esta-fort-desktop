import { Component, OnInit } from '@angular/core';
import { User } from '../../../app.models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  users: User[] = [];

  constructor() {}

  ngOnInit() {}
}
