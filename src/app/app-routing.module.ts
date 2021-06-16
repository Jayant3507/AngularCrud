import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { VtsLoginComponent } from './vts-login/vts-login.component';
import { QuestionsComponent } from './questions/questions.component';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { PetRegComponent } from './pet-reg/pet-reg.component';
import { HeightdivComponent } from './heightdiv/heightdiv.component';
import { CommonComponent } from './common/common.component';
import { AppServicesComponent } from './app-services/app-services.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CovidComponent } from './covid/covid.component';
import { TestComponent } from './test/test.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { DemoComponent } from './demo/demo.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  // { path: '', redirectTo: 'vtslogin', pathMatch: 'full' },
  // { path: 'register', component: RegisterComponent },
  // { path: 'booking', component: BookingComponent },
  // { path: 'vtslogin', component: VtsLoginComponent },
  // { path: 'questions', component: QuestionsComponent },
  // { path: 'profile/:id', component: ProfileComponent },
  // { path: 'dept', component: DepartmentComponent },
  // { path: 'details/:id', component: DepartmentDetailsComponent },
  // { path: 'pet', component: PetRegComponent },
  // { path: 'div', component: HeightdivComponent },
  // { path: 'common', component: CommonComponent },
  // { path: 'firebase', component: AppServicesComponent },
  // { path: 'users', component: UsersComponent },
  // { path: 'posts', component: PostsComponent },
  // { path: 'covid', component: CovidComponent },
  // { path: 'f5', component: TestComponent },
  // { path: 'comp', component: ComponentAComponent },
  {path:'', redirectTo:'products', pathMatch: 'full'},
  { path: 'products', component: DemoComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
