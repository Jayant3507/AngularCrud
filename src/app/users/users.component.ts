import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

  export class UsersComponent implements OnInit {
  constructor(private fb: FormBuilder,private spinner: NgxSpinnerService) { }
  SelectedGender: string = '';
  height = 2;
  color = "#4092F1";
  runInterval = 300;

  public countries: { [key: string]: Object;}[] = [
        { Name: 'Marathi', Code: 'M' },
        { Name: 'Hindi', Code: 'H' },
        { Name: 'English', Code: 'Eng' },
        { Name: 'Telugu', Code: 'Tg' },
    ];


    public localFields: Object = { text: 'Name', value: 'Code' };
    public localWaterMark: string = 'Select Languages';

    value: number = 0;
    addUserForm:any;
    submitted = false;
    dob  =  new FormControl(new  Date());  
    ShowFilter = false;
    
    listuser: any = [
    {
      "id": "1",
      "fullname": "Tiger Nixon",
      "dob": "18/2/1999",
      "languages": "marathi",
      "gender": "male"
    },
    {
      "id": "2",
      "fullname": "ksj dsds",
      "dob": "18/2/1777",
      "languages": "English",
      "gender": "female"
    }
  ];

  selectedDay: string = '';
  days: any = [
    'Male',
    'Female'
  ];
  
  @ViewChild('fullname') fullname:ElementRef;
  //@ViewChild('dob') dob:ElementRef;
  @ViewChild('languages') languages:ElementRef;
  @ViewChild('gender') gender:ElementRef;


  ngOnInit() {
    setTimeout(() => this.value = 30,0);
      $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      
    });

    this.addUserForm = this.fb.group({
      fullname :['',Validators.required],
      dob :['',Validators.required],
      languages :['',Validators.required],
      gender: [''],
      about:['',Validators.required]
    });
}

    onItemSelect(item: any) {
      console.log(item);
    }


    onSelectAll(items: any) {
      console.log(items);
    }

  // onFormSubmit(){
  //  debugger
  // var formData = new FormData();
  // formData.append('fullname',this.addUserForm.get('fullname').value); 
  // formData.append('dob',this.addUserForm.get('dob').value); 
  // formData.append('languages',this.addUserForm.get('languages').value); 
  // formData.append('gender',this.addUserForm.get('gender').value); 
  // formData.append('about',this.addUserForm.get('about').value); 
  // this.submitted = true;
  // if(this.addUserForm.invalid){
  //   return true;
  // }
  // console.log(this.addUserForm.value);    
  // }


  onAddUser(fullname,dob,languages,gender){
    this.listuser.push({
      fullname: fullname.value,
      dob: dob.value,
      languages: languages.value,
      gender: gender.value
    })
  }
  
  radioChangeHandler(event :any){
     this.selectedDay = event.target.value;
  }

}
