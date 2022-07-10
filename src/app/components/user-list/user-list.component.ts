import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  registerForm=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl(""),
    Email:new FormControl(""),
    Mobile:new FormControl(""),
    Gender:new FormControl(""),
    Pwd:new FormControl(""),
    Rpwd:new FormControl("")
  
   });
  
   registerSubmitted(){
    console.log(this.registerForm.get("firstName"));
   }
  }
  

