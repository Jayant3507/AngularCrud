import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetbookingService } from './getbooking.service';
import { AllBooking } from './all-booking';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  items = [];
  items1 = [];
  bookingForm: any;
  allbookings: Observable<AllBooking[]>;
  dataSource = [];
  dataSource1 = [];
  registerUpdate: string = 'Register';
  updateForm: string = 'Edit';
  submitted = false;
  selectedRow: number;
  fetching = false;

  @ViewChild('empname') empname: ElementRef;
  @ViewChild('empsal') empsal: ElementRef;
  @ViewChild('empage') empage: ElementRef;

  p: number = 1;
  constructor(
    private fb: FormBuilder,
    private getbook: GetbookingService,
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    console.log('booking model loaded...');
  }

  ngOnInit() {
    this.getData();
    this.getApiData();
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.maxLength(2)],
      acceptTerms: ['', Validators.required],
    });
  }

  getData() {
    this.spinner.show();
    this.http
      .get(
        'https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow'
      )
      .subscribe((dt) => {
        this.items = dt['items'];
        console.log(this.items);
        this.spinner.hide();
      });
  }

  getApiData() {
    this.fetching = true;
    this.spinner.show();
    this.http
      .get('https://petstore.swagger.io/v2/store/inventory')
      .subscribe((dt1) => {
        this.dataSource1 = dt1['items1'];
        console.log(this.items1);
        this.fetching = false;
        this.spinner.hide();
      });
  }

  get f() {
    return this.bookingForm.controls;
  }

  onFormSubmit() {
    var formData = new FormData();
    formData.append('firstName', this.bookingForm.get('firstName').value);
    formData.append('lastName', this.bookingForm.get('lastName').value);
    formData.append('address', this.bookingForm.get('address').value);
    formData.append('acceptTerms', this.bookingForm.get('acceptTerms').value);

    this.submitted = true;
    if (this.bookingForm.invalid) {
      this.toastr.warning('Failed', 'Invalid User');
      return true;
    }
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', formData)
      .subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Success', 'User Created Successfully!!!');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //update a record
  // updateRecord(ev,rn){
  //     debugger
  //     let robj = this.items.filter(dt =>{ return dt.key == rn })[0];
  //     console.log(robj);
  //     this.bookingForm.patchValue({
  //         firstName: robj['owner']['display_name'],
  //         lastName: robj['owner']['user_type'],
  //         address: robj['owner']['reputation']
  //    });
  //       this.updateForm = 'Update';
  //   }

  onEdit(index: number) {
    console.log(this.items[index]);
    this.empname.nativeElement.value = this.items[index].empname;
    this.empsal.nativeElement.value = this.items[index].empsal;
    this.empage.nativeElement.value = this.items[index].empage;
  }
}
