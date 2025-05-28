import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})


export class ArticleNewReactiveComponent {

  public articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      name: new FormControl(null, [Validators.required, this.NameArticleValidator]),
      url: new FormControl(null, [Validators.required, this.urlValidator]),
      onSale: new FormControl(false),
      price: new FormControl(null, [Validators.required, this.priceValidator,  Validators.min(0.1)])
    })
  }

  onSubmit() {
    this.articleForm.valid ? console.log(this.articleForm.value) : console.log("Invalid form");
  }

  priceValidator: ValidatorFn = (control: AbstractControl) => {
    const value = control.value;
    if (value === null || value === '') {
      return null;
    }
    return isNaN(Number(value)) ? { notANumber: true } : null;
  };

  urlValidator: ValidatorFn = (control: AbstractControl) => {
      const url = control.value;
      if (!url) {
        return null;
      }
      const pattern = /^https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9.\-]*)*$/;
      const valid = pattern.test(url);
      return valid ? null : { invalidUrl: true };
    };

  NameArticleValidator: ValidatorFn = (control: AbstractControl) => {
    const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
    const name = control.value;
    return forbiddenNames.includes(name) ? { invalidName: true } : null;
  };

}
