import { AnimalsService } from './../../services/animals.service';
import { Animal } from './../../model/animal';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {

  animal$!: Observable<Animal>;

  constructor(private service: AnimalsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.animal$ = this.service.getAnimalDetails(parseInt(params.get('id') ?? ''));
    });
  }
}
