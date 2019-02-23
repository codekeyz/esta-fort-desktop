import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../app.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  @Input() showHeader = true;

  @Input() subtitle = 'Showing All Requests';

  @Input() title = 'Requests';

  @Input() requestData: Request[];

  @Input() handleself = true;

  requests$: Observable<Request[]>;

  constructor() {}

  ngOnInit() {}

  getDate(milliseconds) {
    return new Date(milliseconds);
  }
}
