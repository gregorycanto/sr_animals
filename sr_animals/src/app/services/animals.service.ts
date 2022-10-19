import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal, AnimalList } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private readonly API_ENDPOINT: string = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getAnimalList(): Observable<AnimalList> {
    return this.http.get<AnimalList>(this.API_ENDPOINT + 'animals');
  }

  public getAnimalDetails(id: number): Observable<Animal> {
    return this.http.get<Animal>(this.API_ENDPOINT + 'animals/' + id);
  }
}
