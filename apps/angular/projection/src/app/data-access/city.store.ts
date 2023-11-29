import { Injectable, WritableSignal, signal } from '@angular/core';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityStore {
  cities: WritableSignal<City[]> = signal([]);
  cities$ = this.cities.asReadonly();

  addAll(cities: City[]) {
    this.cities.set(cities);
  }

  addOne(city: City) {
    this.cities.update((cities) => [...cities, city]);
  }

  deleteOne(id: number) {
    this.cities.update((cities) => cities.filter((s) => s.id !== id));
  }
}
