import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import {
  MsalBroadcastService,
  MsalGuard,
  MsalGuardConfiguration,
  MsalInterceptor,
  MsalInterceptorConfiguration,
  MsalModule,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';
import {
  BrowserCacheLocation,
  InteractionType,
  IPublicClientApplication,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { UsersInfoModule } from './users-info/users-info.module';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;
export function loggerCallback(logLevel: LogLevel, message: string) {
  //console.log(message);
}
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', [
    'user.read',
  ]);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['user.read'],
    },
  };
}
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '39eb0ebe-46df-4c30-9a29-84ddf0062588',
      authority:
        'https://login.microsoftonline.com/88e7c84f-494f-4f26-9ce8-36d250591ad2',
      redirectUri: 'http://localhost:4200/',
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false,
      },
    },
  });
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    SharedModule,
    UsersModule,
    RouterModule,
    AuthModule,
    MsalModule,
    MatSidenavModule,
    MatFormFieldModule,
    UsersInfoModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
