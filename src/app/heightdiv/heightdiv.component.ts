import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }


    const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  ];

@Component({
  selector: 'app-heightdiv',
  templateUrl: './heightdiv.component.html',
  styleUrls: ['./heightdiv.component.css']
})


  export class HeightdivComponent implements OnInit {
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'determinate';
    value = 50;
    color1: any = [];
    payrollForm: any;
    users = [];
    submitted = false; 
    pageIndex: number;
    
        //mat-table
          displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
          dataSource = ELEMENT_DATA;
          states: string [] = [
          'Alabama','Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        ];

            noWrapSlides = false;
            @ViewChild('myDiv') myDiv: ElementRef;
             constructor(private _snackBar: MatSnackBar,
             private http: HttpClient,
             private toastr: ToastrService,
             private fb: FormBuilder,
             private elem: ElementRef,
             private spinner: NgxSpinnerService) { }

             ngAfterViewInit(){
                 const element = this.elem.nativeElement;
                 const circle = element.querySelector("circle");
                 circle.style.stroke = this.color;
              }
              
              ngOnInit() {    
              this.getUsers();
              this.onLoadData();
              this.payrollForm = this.fb.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                dob: ['', Validators.required],
                stateName: ['', Validators.required],
                gender:['', Validators.required]
              }
              )
            }


            openSnackBar(message: string, action: string){
                this._snackBar.open(message, action,{
                    duration: 2000,
                });
            }

          getUsers(){
            debugger
              this.http.get('https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow').subscribe(dt=>{
                this.users = dt['users']; 
                console.log(this.users);
            })
          }

          onFormSubmit(){
            debugger
            var formData = new FormData();
            formData.append('firstName',this.payrollForm.get('firstName').value);
            formData.append('lastName',this.payrollForm.get('lastName').value);
            formData.append('dob',this.payrollForm.get('dob').value);
            formData.append('stateName',this.payrollForm.get('stateName').value);
            formData.append('gender',this.payrollForm.get('gender').value);  
            this.submitted = true;
            if(this.payrollForm.invalid){
              this.toastr.warning('Warning','Not register');
                return true;
              } 
              this.http.post('https://jsonplaceholder.typicode.com/posts', formData).subscribe(res =>{
              console.log(res);
              this.toastr.success('Success','Register Success!!!');
              }
            )   
          }
  
  onLoadData(){
    debugger
    var formData = new FormData()
    if(true){
      let a = 40;
      console.log(a);
    }

    let dta = (a= 10,b)=>{
      return a + b;
    }

    //spread operator
    let elementsAdd = (...arr)=> {
      debugger
     console.log(arr);
     let sum = 0;
     for(let element of arr){
        sum += element;
     }
     console.log(sum);
    }
  }

}


