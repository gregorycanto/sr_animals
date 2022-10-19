import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalListItemComponent } from './components/animal-list-item/animal-list-item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalListItemComponent,
    SpinnerComponent,
    AnimalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
