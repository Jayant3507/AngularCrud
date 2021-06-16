import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../app-services/common.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  constructor(private fb:FormBuilder,private ar: ActivatedRoute,private ss: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id:[],
      name:[],
      price: []
    })
      this.ss.fetchById(this.ar.snapshot.params.id).subscribe(dtt=>{
         this.editForm.patchValue(dtt);
      })
  }

  onSubmit(){

    this.ss.update(this.ar.snapshot.params.id,this.editForm.value).subscribe(drr=>{
       this.router.navigateByUrl('/products');
       console.log("update",drr);
    })
  }



}
