import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http:HttpClient) { }


  postDetails:any=(data:any)=>{
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getDetails(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
}
  updateDetails(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteDetails(id:number){
    return this.http.delete<any>("http://localhost:3000/posts"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}


