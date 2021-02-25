import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",redirectTo:"search",pathMatch:"full"},
  {path:"add",component:BookAddComponent},
  {path:"search",component:SearchDeleteComponent},
  {path: 'update/:isbn', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
