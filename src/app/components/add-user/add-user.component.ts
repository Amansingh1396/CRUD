import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { userModel } from './userService.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formValue !:FormGroup;
  DetailsModelObj:userModel=new userModel();
  user: any;
  UserServiceService: any;


  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      Name:[''],
      Email:[''],
      Mobile:[''],
      DOB:[''],
      isActive:['']
    })
    
  }
  postDetails(){
    this.DetailsModelObj.Name=this.formValue.value.Name;
    this.DetailsModelObj.Email=this.formValue.value.Email;
    this.DetailsModelObj.Mobile=this.formValue.value.Mobile;
    this.DetailsModelObj.DOB=this.formValue.value.DOB;
    this.DetailsModelObj.isActive=this.formValue.value.isActive;


   this.user.postDetails(this.DetailsModelObj).subscribe((res: any)=>{
    console.log(res);
    alert("Employee Added Successfully")
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
   
   })   
  
    
  }  
  

}


