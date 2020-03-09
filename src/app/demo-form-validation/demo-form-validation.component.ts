import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,
  AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-validation',
  templateUrl: './demo-form-validation.component.html',
  styleUrls: ['./demo-form-validation.component.css']
})
export class DemoFormValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm =  fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku']
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value', form);
  }

}
