import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-pet-reg',
  templateUrl: './pet-reg.component.html',
  styleUrls: ['./pet-reg.component.css']
})


export class PetRegComponent implements OnInit {
  petregForm: any;
  submitted = false;
  photoUrls: File;
  photoPet: File;
  photoImgURL: any;
  HttpHeaders;
  handler:any = null;
  birds: any  = ['Peacock','Kingfisher','Parrot'];


  @ViewChild('myIdentifier') myIdentifier: ElementRef;
  @Output() childEvent = new EventEmitter();

  constructor(private fb: FormBuilder,private http: HttpClient,private toastr: ToastrService,
  private spinner: NgxSpinnerService) {
    var myDiv = document.createElement('div');
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache'
      }); 
      let options = {
        headers: HttpHeaders
      }
     }

  ngOnInit() {
    debugger
    this.loadStripe();
    this.petregForm = this.fb.group({
     name :['',Validators.required],
     category :['',Validators.required]
    })
  }

  get f() { return this.petregForm.controls;}

  ngAfterViewInit() {
    debugger
    console.log(this.myIdentifier.nativeElement.offsetHeight);
  }

  onSubmit(){
    debugger
     var formData = new FormData();
     formData.append('name', this.petregForm.get('name').value);
     formData.append('category', this.petregForm.get('category').value);
     formData.append('photoPet', this.photoUrls);
     this.submitted = true;
      if(this.petregForm.invalid){
      return true;     
     }
     debugger
     this.http.post('https://petstore.swagger.io/v2/pet', formData).subscribe(
       (response) =>{
         console.log(response);
         this.toastr.success('Success','Pet Registration Successful..');
       },
       (error) =>{
         console.log(error);
       }
     )  
  }
  
  //file upload
  onFileChanged(event, txt) {
    debugger
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    if (txt == 'ac'){
      this.photoUrls = event.target.files[0];
      reader.onload = (_event) => {
      this.photoImgURL = reader.result;
      }
    }
  }
  
  onfileUpload(event, tt){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);    
    if(tt == 'as'){
      this.photoUrls = event.target.files[0];
      reader.onload = (_event) =>{
      this.photoImgURL = reader.result;
      }
    }
  }

  pay(amount) {    
      var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function(token: any) {
        console.log(token)
        alert('Token Created!!');
      }
    });
    handler.open({
      name: 'Payment Gatetway',
      amount: amount * 100
    });
  }
  
//payment success popup--
loadStripe() {   
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
        locale: 'auto',
        token: function (token: any) {
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }   
    window.document.body.appendChild(s);
  }
}

onChange(value){
  debugger
  this.childEvent.emit(value);   
  }

  onCategoryChange(e){
    debugger
    console.log(e.target.value)
  }


}





