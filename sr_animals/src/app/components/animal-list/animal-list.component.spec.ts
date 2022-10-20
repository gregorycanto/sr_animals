import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AnimalsService } from './../../services/animals.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListComponent } from './animal-list.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { of } from 'rxjs';

describe('AnimalsListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;
  let loadAnimalListSpy: any;

  beforeEach(async () => {

    const animalService = jasmine.createSpyObj('AnimalsService', ['getAnimalList']);
    loadAnimalListSpy = animalService.getAnimalList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ AnimalListComponent, SpinnerComponent ],
      providers: [ { provide: AnimalsService, useValue: animalService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service to load the list', () => {
    expect(loadAnimalListSpy).toHaveBeenCalled();
  })

  it('should call the service to refresh the list when refresh button is clicked', () => {
    let button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(loadAnimalListSpy).toHaveBeenCalledTimes(2);
  })
});
