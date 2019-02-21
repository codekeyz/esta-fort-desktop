import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  @Input() showHeader = true;

  @Input() subtitle = 'Showing All Requests';

  @Input() title = 'Requests';

  constructor() {}

  ngOnInit() {}
}
