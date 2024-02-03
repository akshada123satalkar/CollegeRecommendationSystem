import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { response, Router } from 'express';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  signupUsers: FormGroup;
   loginUsers:FormGroup;
  
  constructor(private http: HttpClient, private _services: StudentService,private fb:FormBuilder) { }
  ngOnInit(): void {
    
    this.signupUsers=this.fb.group({
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
    this.loginUsers=this.fb.group({
      userName:['',Validators.required],
     
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSignUp() {
    // this.signupUsers.push(this.signupObj);
    const userData=this.signupUsers.value;
    
    //localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.http.post("http://localhost:8080/insert/student", userData).subscribe(
      response => {
        alert("You are registered succcesssfulllyyy");
      
      },
      err=>{
        alert("Wrong Credentials")
        console.error(err);
      }
    );

   
  }
  onLogin() 
  {
    const userData=this.loginUsers.value;
   this.http.post("http://localhost:8080/insert/login",userData).subscribe(
    response=>{
      alert("login success")
    },
    err=>{
      alert("login failed")
      console.error(err);
    }
   )
  
  
  }
}



















































/*import { Component,OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  signupUsers: FormGroup;
   loginUsers:FormGroup;
  
  constructor(private http: HttpClient, private _services: StudentService,private fb:FormBuilder) { }
  ngOnInit(): void {
    
    this.signupUsers=this.fb.group({
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
    this.loginUsers=this.fb.group({
      userName:['',Validators.required],
     
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSignUp() {
    // this.signupUsers.push(this.signupObj);
    const userData=this.signupUsers.value;
    
    //localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.http.post("http://localhost:8080/insert/student", userData).subscribe(
      res => {
        alert("You are registered succcesssfulllyyy");
      
      },
      err=>{
        alert("Wrong Credentials")
        console.error(err);
      }
    );

   
  }
  onLogin() 
  {
    const userData=this.loginUsers.value;
   this.http.post("http://localhost:8080/insert/student",userData).subscribe(
    response => {
      alert("You are registered succcesssfulllyyy");
    
    },
    err=>{
      alert("Wrong Credentials")
      console.error(err);
    }
  );

  

  }
}
export class ContactComponent {

  registerEmail: string;
  registerPassword: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
  router: any;
  error: any;
  constructor(private http: HttpClient) {}

  onRegisterSubmit() {
    this.http.post('http://localhost:8080/insert/student', { email: this.registerEmail, password: this.registerPassword })
      .subscribe((response) => {
        console.log(response);
        alert('Registration successful');
      }, (error) => {
        console.log(error);
        alert('Registration failed');
      });
  }

  // onLoginSubmit() {
  //   this.http.post<any>('http://localhost:8080/insert/log', { email: this.loginEmail, password: this.loginPassword })
  //     .subscribe(response => {
  //       if(response['success']){
  //         this.router.navigate(['/student']);
  //         console.log(response);
  //       }
  //       else{
  //         this.error=response['message'];
  //       }
        
        
  //     }, error => {
  //       console.error(error);
  //       this.error='An error occured';
        
  //     });
  // }
  authenticateUser(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/insert/log', { email, password });
  }
  login() {
    this.authenticateUser(this.email, this.password).subscribe(response => {
      // If the user is authenticated, navigate to the dashboard.
      if (response) {
        // this.router.navigate(['/student']);
        alert('Login ');
      } else {
        // If authentication failed, display an error message.
        console.log(response.message);
        alert('Ghari Ja Ghari');
      }
    });
  }
  onLogout() {
    this.isLoggedIn = false;
  }
}
*/
