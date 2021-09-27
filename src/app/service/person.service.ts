import {Injectable} from '@angular/core';
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: Person[] = [{
    id: 1,
    idCode: 1,
    name: 'thu',
    gmail: 'thu@gmail.com',
    phone: '0123456789',
    address: 'hung yen',
  }];

  constructor() {
  }
  getAll(){
    return this.persons;
  }

  saveProduct(person: Person) {
    this.persons.push(person);
  }


  findById(id: number | undefined) {
    return this.persons.find(person =>
      person.id === id
    )

  }

  updateProduct(id: number | undefined, product: any) {
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i].id === id) {
        this.persons[i] = product;
      }
    }
  }
}
