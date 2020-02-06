
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {NgModule, ApplicationRef} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { ApiModule } from './api-client/api.module';
import { Configuration, ConfigurationParameters } from './api-client/configuration';
import { BASE_PATH } from './api-client/variables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialLayoutComponent } from './material-layout/material-layout.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PushNotificationService } from 'ngx-push-notifications';
import { RegistarComponent } from './registar/registar.component';
import { EmailComponent } from './email/email.component';

/**
 * Build API configuration
 */
export function buildApiConfiguration() {
  const configurationParameters: ConfigurationParameters = {};
  // TODO: Token should be injected using HTTP Interceptor pattern (@see link in Moodle)
  const config = new Configuration(configurationParameters);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    MaterialLayoutComponent,
    LoginFormComponent,
    ContactosComponent,
    NavBarComponent,
    PrincipalComponent,
    ProfileComponent,
    RegistarComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ApiModule.forRoot(buildApiConfiguration),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    [PushNotificationService],
    { provide: BASE_PATH, useValue: environment.apiBaseUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }