import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../app.models';
import { DataService } from '../../core/data.service';
import { tap } from 'rxjs/operators';

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

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    if (this.handleself) {
      this.dataSvc
        ._getDataList<Request>('Requests', qr =>
          qr.orderBy('date_created', 'asc')
        )
        .pipe(
          tap(res =>
            res.sort((a, b) => {
              return a.status < b.status ? -1 : 1;
            })
          )
        )
        .subscribe(data => (this.requestData = data));
    }
  }

  getDate(milliseconds) {
    return new Date(milliseconds);
  }
}
