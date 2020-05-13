import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male','female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,                  //this sets the value for all controls of the entire form in one command !
    //     email: ''
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '', 
    //   gender: 'male',
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName                     //this overwrites the value for one control inside the form !
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(`logging the form:`,form);
  // }
  onSubmit(){
    console.log(`logging the form:`,this.signupForm)
  }
}
