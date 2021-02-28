import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"]
})
export class BasicFormComponent implements OnInit {
  formData = {};
  console = console;
  basicForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.basicForm = new FormGroup({
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
