import { Component } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ai3';
  constructor(protected network: Network, private _pushNotificationService: PushNotificationService) {}
}
