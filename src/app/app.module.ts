import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { GetServService } from './register/get-serv.service';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { VtsLoginComponent } from './vts-login/vts-login.component';
import { QuestionsComponent } from './questions/questions.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { PetRegComponent } from './pet-reg/pet-reg.component';
import { HeightdivComponent } from './heightdiv/heightdiv.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonComponent } from './common/common.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AppServicesComponent } from './app-services/app-services.component';
import { CommonService } from './app-services/common.service';
import { UsersComponent } from './users/users.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { PostsComponent } from './posts/posts.component';
import { CovidComponent } from './covid/covid.component';
import { TestComponent } from './test/test.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { DemoComponent } from './demo/demo.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BookingComponent,
    VtsLoginComponent,
    QuestionsComponent,
    ProfileComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    PetRegComponent,
    HeightdivComponent,
    CommonComponent,
    AppServicesComponent,
    UsersComponent,
    PostsComponent,
    CovidComponent,
    TestComponent,
    ComponentAComponent,
    ComponentBComponent,
    DemoComponent,
    EditComponent,
    AddComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatInputModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    MatDatepickerModule, //datepicker
    MatNativeDateModule, //datepicker
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MultiSelectAllModule,
    ProgressbarModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
  ],

  providers: [
    GetServService,
    MatDatepickerModule,
    BsModalService,
    CommonService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App module loaded');
  }
}
