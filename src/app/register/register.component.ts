import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {  
 myInputMessage: string ="I am Parent Component"
  url="http://lorempixel.com/400/200/sports/"
  promiseval;
  dell = {
   brand:"dell",
   harddisk:'2 TB',
   color:'Black'
  }

  hp = {
    brand:"Hp",
    harddisk:'1 TB',
    color:'Red'
   }
   
   notAvail = {
    brand:'Not Available',
    status:'failed'
   }

    constructor() {  }
    DellAvailable(){
      return true;
    }

    HpAvailable(){
      return false;
    }

//promise 
  ngOnInit() {

    console.log(this.myInputMessage);

    let buyLaptop = new Promise((resolve, reject) => {
      //  resolve('Promise is resolve');
      //  reject('promise is reject');
       if(this.DellAvailable()){
        return setTimeout(() =>{
          // resolve('Dell is Purchased..');
          resolve(this.dell);
        },3000)   
       }
       else if(this.HpAvailable()){
        return setTimeout(()=>{
          // resolve('Hp is Purchased..');
          resolve(this.hp);
        },3000)
       }
       else{
        return setTimeout(()=>{
          // reject('Laptop is not available on the store..');
          reject(this.notAvail);
        },3000)
       }
    });


    buyLaptop.then(res => {
      console.log('then code =>' ,res);
      this.promiseval = res;
    }).catch(res =>{
      console.log('catch code =>' ,res);
      this.promiseval = res;
    });
   }

   //image upload and preview
   selectFile(event) {
     if(event.target.files){
       var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])  
       reader.onload = (event: any) => {
         this.url = event.target.result
       }
     }

     
   }

}
