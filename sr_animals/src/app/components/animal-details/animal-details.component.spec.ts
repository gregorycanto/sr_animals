import { SpinnerComponent } from './../spinner/spinner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalsService } from './../../services/animals.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailsComponent } from './animal-details.component';

describe('AnimalDetailsComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ AnimalDetailsComponent, SpinnerComponent ],
      providers: [AnimalsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
