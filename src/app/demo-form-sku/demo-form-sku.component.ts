import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,
  AbstractControl, FormControl } from '@angular/forms';


function skuValidator(control: FormControl): { [s: string] : boolean } {
    if (!control.value.match(/^123/)) {
        return {invalidSku: true};
    }
    return null;
}

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm =  fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value', form);
  }


}
