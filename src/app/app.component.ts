import { Component, OnInit,  VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent implements OnInit{


  // name = 'Angular ' + VERSION.major;



  textForm: FormGroup;
  name = '';
  email = '';

  formData: any[] = []
  // matcher = new MyErrorStateMatcher;

  constructor( private fb: FormBuilder) {}



  ngOnInit() : void {
    this.textForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required]
    })
  }

  onSubmitForm() {
    this.formData = this.textForm.value;
    console.log(this.formData)
  }


}
