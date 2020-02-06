import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';
import { SupportService } from '../api-client/api/support.service';
import { SupportRequest } from '../api-client/model/supportRequest';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  supportForm = this.formBuilder.group({     
    email: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],    
    subject: [null, [Validators.required, Validators.maxLength(50)]], 
    message: [null, [Validators.required, Validators.maxLength(250)]],   
  });   
    constructor(public auth: AuthService,     
      private httpClient: HttpClient,     
      private formBuilder: FormBuilder,      
      private userService: UserService,      
      private supportservice: SupportService,   ) { }    
      ngOnInit() {   

      }  
       doSupport() {     
         const sendmail: SupportRequest = this.supportForm.value;     
         console.log(sendmail);     
         this.supportservice.supportTicketPost(sendmail).subscribe( {       
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
