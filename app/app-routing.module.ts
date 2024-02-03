import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './pages/college/college.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ParentComponent } from './pages/parent/parent.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'college',component:CollegeComponent},
  {path:'parent',component:ParentComponent},
  {path:'student',component:StudentComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
