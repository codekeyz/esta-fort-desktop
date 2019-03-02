import { Component, OnInit } from '@angular/core';
import { User } from '../../../app.models';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  users: User[] = [];

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.dataSvc
      ._getDataList<User>('Users')
      .subscribe(users => (this.users = users));
  }
}
