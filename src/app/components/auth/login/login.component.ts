import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  email: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams.returnUrl || '/me/dashboard';
  }

  signin() {
    this.authSvc.login(this.email, this.password).then(res => {
      this.router.navigate([this.returnUrl]);
    });
  }
}
