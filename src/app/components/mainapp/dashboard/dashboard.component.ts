import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Observable } from 'rxjs';
import { Request, User, Driver } from '../../../app.models';
declare let jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  requests$: Observable<Request[]>;
  users$: Observable<User[]>;
  drivers$: Observable<Driver[]>

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.requests$ = this.dataSvc._getDataList<Request>('Requests');
    this.users$ = this.dataSvc._getDataList<User>('Users');
    this.drivers$ = this.dataSvc._getDataList<Driver>('Drivers');
  }
}
