import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.scss']
})
export class AnimalListItemComponent implements OnInit {

  @Input()
  animal!: Animal;

  constructor() { }

  ngOnInit(): void {
  }

}
