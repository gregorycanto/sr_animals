import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

const routes: Routes = [
  { path: '*', redirectTo: ''},
  { path: '', component: AnimalListComponent },
  { path: 'animal/:id', component: AnimalDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
