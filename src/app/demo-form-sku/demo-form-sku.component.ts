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
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm =  fb.group({
      'productName': ['', Validators.required]
    });

    this.productName = 'ng-book: The Complete Guide to Angular';
    
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value', form);
  }


}
