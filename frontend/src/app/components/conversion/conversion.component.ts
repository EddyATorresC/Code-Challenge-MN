import { Conversion } from '../../services/conversion.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  history!: string[];

  constructor(public conversionService: Conversion) { 
    this.history = [];
  }
  poundsToKilogramConversion!: any;
  kilogramToPoundConversion!: any;

  convertFormPounds = new FormGroup({
    value: new FormControl('')
  });

  convertFormKilograms = new FormGroup({
    value: new FormControl('')
  });

  calculationsForm = new FormGroup({
    valueKg: new FormControl(''),
    valueLb: new FormControl(''),
    operation: new FormControl('')
  });

  ngOnInit(): void {
  }

  PoundsToKilograms() {
    this.conversionService.PoundsToKilograms(this.convertFormPounds.value).subscribe({
            next: res => { 
              this.poundsToKilogramConversion = res.plainValue;
              this.history.push(res.response); 
              this.history.reverse();
            },
            error: err => console.error(err)
          });

  }

  KilogramsToPounds() {
    this.conversionService.KilogramsToPounds(this.convertFormKilograms.value).subscribe({
            next: res => { 
              this.kilogramToPoundConversion = res.plainValue;
              this.history.push(res.response); 
              this.history.reverse();
            },
            error: err => console.error(err)
          });

  }

  performCalculation(){
    this.conversionService.CalculateKilogramsPounds(this.calculationsForm.value).subscribe({
      next: res => {
        this.history.push(res.response); 
        this.history.reverse();
      },
      error: err => console.error(err)
    });
  }

  resetFormPounds(event: Event) {
    event.preventDefault();
    this.convertFormPounds.setValue({value: ''});
    this.poundsToKilogramConversion = '';
  }

  resetFormKilograms(event: Event) {
    event.preventDefault();
    this.convertFormKilograms.setValue({value: ''});
    this.kilogramToPoundConversion = '';
  }

  resetFormCalculation(event: Event){
    event.preventDefault();
    this.calculationsForm.setValue({valueKg: '', valueLb: '', operation: ''});
  }


}
