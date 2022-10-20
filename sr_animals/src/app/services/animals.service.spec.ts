import { AnimalList } from './../model/animal';
import { environment } from 'src/environments/environment';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AnimalsService } from './animals.service';
import { HttpClient } from '@angular/common/http';

const mockData: AnimalList = {
  items: [{
    id: 1,
    avatar: '',
    name: 'Xpto',
    type: ''
  }]
};

describe('AnimalsserviceService', () => {
  let service: AnimalsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimalsService]
    });

    service = TestBed.inject(AnimalsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call API when getAnimalList is called', (done)=>{
    service.getAnimalList().subscribe((animalList: AnimalList) => {
      expect(animalList.items[0].name).toBe('Xpto');

      done();
    });

    const req = httpTestingController.expectOne(environment.apiEndpoint + 'animals')
      .flush(mockData);

    httpTestingController.verify();

  })
});
