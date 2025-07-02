import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private oauthService: OAuthService, private router: Router) {}

  logout() {
    this.oauthService.logOut();
    this.router.navigate(['/dashboard']);
  }

  get isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  login() {
    this.oauthService.initLoginFlow();
  }
}
