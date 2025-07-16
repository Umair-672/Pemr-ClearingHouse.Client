import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private discoveryLoaded = false;

  constructor(
    private router: Router,
    private oauthService: OAuthService
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    // Only load discovery document and try login once
    debugger;
    if (!this.discoveryLoaded) {
      this.discoveryLoaded = true;

      if (this.oauthService.hasValidAccessToken()) {
        return of(this.checkAccess());
      } else {
        return from(this.oauthService.loadDiscoveryDocumentAndTryLogin()).pipe(
          map(() => this.checkAccess()),
          catchError(() => of(this.router.parseUrl('/login'))) // Redirect to login on error
        );
      }
    }
    return of(this.checkAccess());
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
