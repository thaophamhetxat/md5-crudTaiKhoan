import { Component, OnInit } from '@angular/core';
import {Person} from "../../model/person";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../service/person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {
  persons:Person[]=[];

  personForm: FormGroup = new FormGroup({
    id: new FormControl(),
    idCode: new FormControl(),
    name: new FormControl('',Validators.minLength(6)),
    address : new FormControl('',Validators.required),
    gmail : new FormControl(),
    phone: new FormControl()
  })
  constructor(private personService:PersonService,
              private router: Router) { }

  ngOnInit(): void {

  }
  submit() {
    const person = this.personForm.value;
    this.personService.saveProduct(person);
    alert('Create Success!')
    this.personForm.reset();
  }
}
