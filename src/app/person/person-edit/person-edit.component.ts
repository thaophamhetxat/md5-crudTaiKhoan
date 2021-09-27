import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PersonService} from "../../service/person.service";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  personForm!: FormGroup;
  id!: number;

  constructor(private personService: PersonService,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'));
      const person = this.getProduct(this.id);
      this.personForm = new FormGroup({
        id: new FormControl(person?.id),
        idCode: new FormControl(person?.idCode),
        name: new FormControl(person?.name),
        address: new FormControl(person?.address),
        phone: new FormControl(person?.phone),
        gmail: new FormControl(person?.gmail),
      });
    });
    console.log(this.personForm);
  }

  ngOnInit() {

  }

  getProduct(id: number) {
    return this.personService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.personForm.value;
    this.personService.updateProduct(id, product);
    alert('Cập nhật thành công');
  }

}
