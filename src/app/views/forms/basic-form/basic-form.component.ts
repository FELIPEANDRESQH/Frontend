import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { CityI, StateI } from '../../../shared/models/location.interface';
import { DataService } from '../../../shared/services/data-location.service';

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }, DataService]
})
export class BasicFormComponent implements OnInit {
  //formData = {};
  //console = console;

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  public selectedState: StateI = {id: 0, name: ''};;
  public states: StateI[];
  public cities: CityI[];

  constructor(private _formBuilder: FormBuilder, private dataSvc: DataService) {  }

  ngOnInit() {

    this.states = this.dataSvc.getStates();

    this.firstFormGroup = new FormGroup({
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

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  onSelect(id: number): void{
        this.cities = this.dataSvc.getCities().filter(item => item.countryId == id);
  }
}
