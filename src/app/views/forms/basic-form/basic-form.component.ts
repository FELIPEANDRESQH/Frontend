import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class BasicFormComponent implements OnInit {
  formData = {};
  console = console;
  //basicForm: FormGroup;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    /*
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    */
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.firstFormGroup = new FormGroup({
      //firstCtrl: new FormControl("", [Validators.required]),
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      age: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3)
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10)
      ]),
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      gender: new FormControl("", [Validators.required]),
      agreed: new FormControl("", (control: FormControl) => {
        const agreed = control.value;
        if (!agreed) {
          return { agreed: true };
        }
        return null;
      })
    });
  }
}
