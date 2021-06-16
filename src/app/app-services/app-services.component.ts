import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from './common.service';


@Component({
  selector: 'app-app-services',
  templateUrl: './app-services.component.html',
  styleUrls: ['./app-services.component.css']
})


export class AppServicesComponent implements OnInit {

  p: number = 1;
  addproductForm:any;
  @ViewChild('id') id:ElementRef;
  @ViewChild('name') name:ElementRef;

  constructor(private fb: FormBuilder,private _pd: CommonService) { }

  products = [];

  ngOnInit(): void {
    this.addproductForm = this.fb.group({
      id :['', Validators.required],
      name :['', Validators.required],
    });
  }
 
  onAddProduct(id, name){
     this.products.push({
       id: id.value,
       name: name.value,
     });
  }

  // onSaveProduct(){
  //    this._pd.saveProducts(this.products).subscribe(
  //      (response)=> console.log(response),
  //      (err)=> console.log(err)
  //    );
  // }
  
  onDeleteProduct(id){
     if(confirm('Do u want to delete this product?')){
      this.products.splice(id, 1); 
    }
  }
  
  onEditProduct(index: number){
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
  }

  
}
