import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://pemrpk-265/identity',
  redirectUri: window.location.origin,
  postLogoutRedirectUri: window.location.origin,
  clientId: 'pemr_clearing_house', // Replace with your client id
  responseType: 'code',
  scope: 'openid profile email', // Adjust scopes as needed
  showDebugInformation: true,
  requireHttps: false, // Only for development, set to true in production
  logoutUrl: 'http://localhost:4200',
};
