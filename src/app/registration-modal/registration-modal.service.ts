import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationModalService {
  constructor(private http: HttpClient) {}

  public validateForm() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/invalid-url',
      {}
    );
    return of({
      response: {
        statusCode: 'success',
      },
    });
  }
}
