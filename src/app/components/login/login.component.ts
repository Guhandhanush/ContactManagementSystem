import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!:FormGroup;

  constructor(private toast:ToastrService){}

  sampleSuccess(){
    this.toast.success('You Logged in successfully','Login Success',{
      easing:'ease-in',
      easeTime:5000
    })
  }

}
