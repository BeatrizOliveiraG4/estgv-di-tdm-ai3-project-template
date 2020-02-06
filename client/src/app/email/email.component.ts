import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { SendEmailRequest } from '../api-client/model/model';
import { CommunicationService } from '../api-client/api/communication.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  userForm = this.formBuilder.group({     
    from: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],     
    to: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],     
    subject: [null, [Validators.required, Validators.maxLength(50)]], 
    message: [null, [Validators.required, Validators.maxLength(250)]],   
  });   
    constructor(public auth: AuthService,     
      private httpClient: HttpClient,     
      private formBuilder: FormBuilder,      
      private userService: UserService,      
      private comunicationservice: CommunicationService,   ) { }    
      ngOnInit() {   

      }  
       doSupport() {     
         const sendmail: SendEmailRequest = this.userForm.value;     
         console.log(sendmail);     
         this.comunicationservice.communicationSendEmailPost(sendmail).subscribe( {       
           next: this.onSuccess.bind(this),       
           error: this.onError.bind(this),    
          }     
          )   
        }    
        onSuccess(res: any) { // MSG DE SUCESSO     
          console.log('SUCESSO');   }    
          onError(res: any) {// MSG DE ERRO     
            console.log('ERRO')   }
}
