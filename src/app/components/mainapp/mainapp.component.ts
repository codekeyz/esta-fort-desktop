import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../app.animations';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.scss'],
  animations: [fadeAnimation]
})
export class MainappComponent implements OnInit {
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  logout() {
    this.authSvc.signOut().then(() => this.router.navigate(['/auth/login']));
  }
}
