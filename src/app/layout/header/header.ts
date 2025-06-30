import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private oauthService: OAuthService) {}

  logout() {
    this.oauthService.logOut();
  }
}
