import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  featureValue: string;
  title = 'registration';
  featureSelected(feature: string) {
    this.featureValue = feature;
  }
}
