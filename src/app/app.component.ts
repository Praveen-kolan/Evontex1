import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  genders=['male','female'];
  Hobbies =["cricket", "chess","footbal" ,"vollyball"]
  studentgroup:FormGroup;

  ngOnInit(){
     this.studentgroup = new FormGroup({
       'username':new FormControl(''),
         'dob':new FormControl(''),
       'gender':new FormControl(''),
       'hoby': new FormControl('')
     })
  }
  onSubmit(v){
    console.log(this.studentgroup);
    this.studentgroup.reset();
  }
 
}

