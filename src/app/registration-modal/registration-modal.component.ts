import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationModalService } from './registration-modal.service';

declare var $:any;

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css'],
  providers: [RegistrationModalService]
})
export class RegistrationModalComponent implements OnInit {

  public formSubmitted:boolean = false;
  public accountCreation:boolean = false;
  public showImage:boolean = true;
  @Output() getName = new EventEmitter<any>();

  constructor(private _RegistrationModalService : RegistrationModalService) { }

  ngOnInit(): void {
  }

  public submitForm(input:NgForm){

    
    this._RegistrationModalService.validateForm().subscribe(response => {

      if(response){
        let statusCode = response['response']['statusCode'];
        
        this.formSubmitted = (statusCode === 'success' || statusCode === 'failed' ) ? true : false;
        if(statusCode === 'success'){
          this.accountCreation = true;
          this.showImage = false;
        } else if (statusCode === 'failed'){
          this.accountCreation = false;
        }

        this.getName.emit(input.value);
      }
    })
  }


}
