import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  form:any;
  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'first_name': new FormControl(" ", [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z \-\']+')] ),
      'last_name': new FormControl(" ", [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z \-\']+')]),
      'mobile': new FormControl(" ", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9]\\d{9}')]),
      'data_of_birth': new FormControl(" ", [Validators.required]),
      'email': new FormControl(" ", [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
     'password': new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
     'confirm_password': new FormControl("",[ Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')])
    })
  }
  get FirstName() {
    return this.form.get('first_name')

  }
  get LastName() {
    return this.form.get('last_name')

  }
  get Mobile() {
    return this.form.get('mobile')

  }
  get DateOfBirth(){
    return this.form.get('data_of_birth')
  }
  get Email() {
    return this.form.get('email')

  }
  get Password() {
    return this.form.get('password')

  }
  get ConfirmPassword() {
    return this.form.get('confirm_password')

  }
  
  submit(){
    console.log(this.form)
    if(this.form.get('password').value != this.form.get('confirm_password').value){
      window.alert("Password and Confirm Password doesnt match ")
    }
  }
}
