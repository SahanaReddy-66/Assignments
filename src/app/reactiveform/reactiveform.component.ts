import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../shared/apiservice.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  form: any;
  array: any = [];
  Search: any
  newArray: any = [];
  constructor(private api: ApiserviceService) { }

  ngOnInit(): void {
      this.form = new FormGroup({
      'first_name': new FormControl(" ", [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z \-\']+')]),
      'last_name': new FormControl(" ", [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z \-\']+')]),
      'user_name': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
      'gender': new FormControl("", [Validators.required])
    })
  }
  get FirstName() {
    return this.form.get('first_name')
  }
  get LastName() {
    return this.form.get('last_name')
  }
  get UserName() {
    return this.form.get('user_name')
  }
  get Password() {
    return this.form.get('password')
  }

  submit() {
 
    console.log(this.form)
    this.api.getUserdata().subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.user_name === this.form.value.user_name
      });
      if (user) {
        window.alert("user name exists")
      }
      else {
        this.api.postData(this.form.value).subscribe((res: any) => {
       
        })
      }
    })

  }
}
