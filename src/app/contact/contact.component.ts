import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faPhone, faEnvelope, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import{ init } from 'emailjs-com';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
init("user_mKMVt6L5RFy4sZkyfdEPp");

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})

@Injectable()
export class ContactComponent {
  name: string;
  surname: string;
  telephone: string;
  email: string;
  message: string;
  phone = faPhone;
  address = faLocationArrow;
  envelope = faEnvelope;
  successfullySent: boolean;

  constructor(private http: HttpClient) {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.message = "";
    this.telephone = "";
    this.successfullySent = false; 
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
  onTelephoneChange(value: any) {
    this.telephone = value.target.value;
  };

  sendEmail() {
    const { surname, message, email, name, telephone } = this;
    const request = {
      surname,
      message,
      email,
      name,
      telephone
    }
    const requestString = JSON.stringify(request);

    var data = {
      service_id: 'service_9b92izk',
      template_id: 'template_156qwtq',
      user_id: 'user_mKMVt6L5RFy4sZkyfdEPp',
      template_params: request
  };
  emailjs.send(data.service_id, data.template_id, request, data.user_id).
  then((res:EmailJSResponseStatus) => {
    if(res){
      this.successfullySent = true;
    }
  }, ()=>alert("Nekaj je šlo narobe. Sporočilo ni bilo posalno"));
    this.http.post('https://api.emailjs.com/api/v1.0/email/send',data, {
      headers:{
        header: 'Content-Type: application/json'
      }
    });
  }
  
  goToTop(){
    document.querySelector('.front').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}

interface EmailRequest {
  surname: string;
  name: string;
  email: string;
  message: string;
}