import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  featureValue: string;
  signInStateTxt:string = 'Log in';
  showDropdown:boolean = false;
  @ViewChild('registrationModalContainer', { read: ViewContainerRef }) registrationModalContainer: ViewContainerRef;
  @ViewChild('regModal', { read: TemplateRef }) regModal: TemplateRef<any>;


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
  removeExistingEmbeddedView(){
    if (this.registrationModalContainer.length > 0) {
      this.registrationModalContainer.remove();
    } else {
      return;
    }
  }

  onRegister(){
    this.removeExistingEmbeddedView();
    this.registrationModalContainer.createEmbeddedView(this.regModal);
    $('#exampleModal').modal('show');

  }

}
