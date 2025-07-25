import { AfterViewInit, Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './configs/oidc-auth.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  providers: [OAuthService]
})
export class App {
  protected title = 'pemr-clearing-house';
  showLayout: boolean = false;
  constructor(private oauthService: OAuthService, private router: Router) {
    this.configureAuth();
  }

  configureAuth() {
    this.oauthService.configure(authConfig);
    if (!this.oauthService.hasValidAccessToken()) {
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
          debugger;
            const isReturningFromAuth = window.location.search.includes('code=') || window.location.hash.includes('access_token');

            if (!isReturningFromAuth && !this.oauthService.hasValidAccessToken()) {
              this.oauthService.initCodeFlow();
              this.showLayout = false;
            } else {
              if (!this.oauthService.hasValidAccessToken()){
                this.showLayout = false;
                this.router.navigate(['/']);
              }else{
                this.showLayout = true;
                this.router.navigate(['/dashboard']);
              }
            }
          });
    } else {
      this.showLayout = true;
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
    this.showLayout = false;
    this.router.navigate(['/']);
  }

  get token() {
    return this.oauthService.getAccessToken();
  }
}
