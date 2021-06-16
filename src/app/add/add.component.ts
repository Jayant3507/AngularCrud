import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../app-services/common.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  editForm: FormGroup;
  constructor(private fb:FormBuilder,private ar: ActivatedRoute,private ss: CommonService,private router: Router
    ) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      // id: [],
      name:[],
      price: []
    })
  }

  onSubmit(){
    this.ss.save(this.editForm.value).subscribe(drr=>{
      this.router.navigateByUrl('/crud');
       console.log("Save",drr);
    })
  }

}
