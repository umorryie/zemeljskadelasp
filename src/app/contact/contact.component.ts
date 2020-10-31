import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})

@Injectable()
export class ContactComponent {
  name: string;
  surname: string;
  email: string;
  message: string;

  constructor(private http: HttpClient) {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.message = "";
  }

  onNameChange(value: any) {
    this.name = value.target.value;

  };

  onSurnameChange(value: any) {
    this.surname = value.target.value;
  };

  onEmailChange(value: any) {
    this.email = value.target.value;
  };

  onMessageChange(value: any) {
    this.message = value.target.value;
  };

  sendEmail() {
    const { surname, message, email, name } = this;
    const request = {
      surname,
      message,
      email,
      name
    }
    const requestString = JSON.stringify(request);

    /*const response = this.http.post('https://https://localhost:44307/sendemail', JSON.stringify(request)).subscribe(data => {
      this.surname = "Matej PEsjak";
    });*/
    this.http.post(`/sendemail?request=${requestString}`,
    {
      "headers": {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Origin": "*",
      }
    }).subscribe(data => {
      console.log(data);
  });
}
}

interface EmailRequest {
  surname: string;
  name: string;
  email: string;
  message: string;
}