import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../configs/oidc-auth.config';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private discoveryLoaded = false;

  constructor(
    private router: Router,
    private oauthService: OAuthService
  ) {
    this.oauthService.configure(authConfig);
  }

  canActivate(): Observable<boolean | UrlTree> {
    // Only load discovery document and try login once
    if (!this.discoveryLoaded) {
      this.discoveryLoaded = true;
      return from(this.oauthService.loadDiscoveryDocumentAndTryLogin()).pipe(
        map(() => this.checkAccess())
      );
    }
    return new Observable<boolean | UrlTree>(observer => {
      observer.next(this.checkAccess());
      observer.complete();
    });
  }

  private checkAccess(): boolean | UrlTree {
    if (this.oauthService.hasValidAccessToken()) {
      return true;
    } else {
      this.oauthService.initLoginFlow();
      return false;
    }
  }
}
