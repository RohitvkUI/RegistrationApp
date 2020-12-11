import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  featureValue: string;
  signInStateTxt:string = 'Log in';
  showDropdown:boolean = false;


  title = 'registration';
  featureSelected(feature: string) {
    this.featureValue = feature;
  }
  setName(event){
    this.signInStateTxt = event;
  }
  toggleDropdown(){    
    this.showDropdown = !this.showDropdown;
  }

  setbackToLogin(){
    this.signInStateTxt = 'Log in';
    this.showDropdown = !this.showDropdown;
  }

}
