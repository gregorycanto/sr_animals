import { Component, OnInit } from '@angular/core';
import { Animal, AnimalList } from '../../model/animal';
import { AnimalsService } from '../../services/animals.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {

  animals$: Observable<Animal[]>;

  constructor(private service: AnimalsService) {
    this.animals$ = this.loadAnimalList();
  }

  public refreshList() {
    this.animals$ = this.loadAnimalList();
  }

  loadAnimalList(): Observable<Animal[]> {
    return this.service.getAnimalList().pipe(
      map((list: AnimalList) => list.items)
    );
  }

}
