import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { ListDataComponent } from './list-data/list-data.component';

const routes: Routes = [
  { path: 'add-data', component: AddDataComponent},
  { path: 'list-data', component: ListDataComponent},
  { path: '**', component: AddDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
