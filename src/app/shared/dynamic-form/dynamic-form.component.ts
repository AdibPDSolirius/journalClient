import { ActivatedRoute } from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input()
  service: any;

  formGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  });
  isUpdate: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.determineIsUpdate();
    if (this.isUpdate) {
      this.populateFields();
    }
  }

  onSubmit(): void {
    if (this.isUpdate) {
      this.service.update(this.formGroup.get('id').value, this.formGroup.getRawValue()).subscribe(data => {
        this.goBack();
      });
    } else {
      this.service.add(this.formGroup.getRawValue()).subscribe(data => {
        this.goBack();
    });
    }
  }

  determineIsUpdate(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
    }
  }

  populateFields(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.get(+id).subscribe(returnedItem => {
      this.formGroup.patchValue({
        id: returnedItem.id,
        name: returnedItem.name
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
