import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListItemComponent } from './animal-list-item.component';

describe('AnimalListItemComponent', () => {
  let component: AnimalListItemComponent;
  let fixture: ComponentFixture<AnimalListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalListItemComponent);
    component = fixture.componentInstance;
    component.animal = { id: 1, name: 'Test Animal', avatar: 'http://url.to/avatar.jpg', type: 'Dog' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
