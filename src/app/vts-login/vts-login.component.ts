import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vts-login',
  templateUrl: './vts-login.component.html',
  styleUrls: ['./vts-login.component.css']
})

export class VtsLoginComponent implements OnInit {
  loginForm1: any;
  message: string;
  submitted = false;
  error = false;
  username: string;
  password: string;
  
  constructor(private fb: FormBuilder,
              private toastr: ToastrService, 
              private router: Router) { }

  ngOnInit() {

  }
  
  onSubmit(){
    // var formData = new FormData();
    // formData.append('userName',this.loginForm1.get('userName').value); 
    // formData.append('password',this.loginForm1.get('password').value);  
    // localStorage.setItem('userName' , 'Jayant');
    // localStorage.setItem('password', 'J@yant$123');
    // this.router.navigate['/register'];
    // this.submitted = true;
    // this.error = true;
    // this.message = "Username/password Wrong";
  }  

  loginUser ()
  { 
       if(this.username == "jack@gmail.com" && this.password =="jayant@123")
       {
          this.router.navigate[("/questions")]
       }
       else{
         alert("Please Enter Valid Details..");
       }
  }


}
