import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {
  myForm: any = FormGroup;
  arr: any = FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'name': new FormControl("", [Validators.required]),
      'address': new FormControl("", [Validators.required]),
      'phone_number': new FormControl("", [Validators.required]),
      'email': new FormControl("", [Validators.required]),
      'dateofpurchase': new FormControl("", [Validators.required]),
      arr: this.fb.array([this.createItem()])
    })
  }
  createItem() {
    return this.fb.group({
      name: [''],
      quantity: ['']
    })
  }
  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }
  removeItem(i: number) {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.removeAt(i);

  }
  Submit() {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }
}
