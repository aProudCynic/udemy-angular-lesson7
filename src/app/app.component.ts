import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formData: FormGroup;

  projectstatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.formData = new FormGroup({
      'projectname': new FormControl('test', Validators.required, this.nameValidator),
      'mail': new FormControl('test@test.com', [Validators.required, Validators.email]),
      'projectstatus': new FormControl(this.projectstatus[1])
    });
  }

  onSubmit() {
    console.log(this.formData.value, this.formData.valid);
  }

  nameValidator(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      if (control.value === 'Test') {
        resolve({'emailIsForbidden': true});
      } else {
        resolve(null);
      }
    });
  }
}
