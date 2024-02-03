import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormControl } from '@angular/forms';
import {  Renderer2 } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']

})
export class StudentComponent implements OnInit {
  public data: any
  public Region: string
  public minMerit: any
  public maxMerit: any
  public branch: string
  public status: string
  public mySearch:boolean
  RegionList: any;
  BranchList=["Artificial Intelligence & Data Science","Automation & Robotics Engineering","Civil Engineering","Computer Engineering","Information Technology","Instrumentation Engineering","Electrical Engineering","Electronics & Telecommunication","Mechanical Engineering"]
  
  constructor(private _services: StudentService, private renderer:Renderer2) {
    this.Region = ''
    this.minMerit = ''
    this.maxMerit = ''
    this.branch = ''
    this.status = 'Enter a text'
    this.mySearch = false
  }

  public clickMe(obj: any): any {
    this.status = 'Please Wait'
    this._services.my_method(obj).subscribe(res => {
      if(res.length !=0)
        this.mySearch = true
      this.data = res
      for (let i = 0; i < this.data.length; i++) {
        console.log(this.data[i][this.branch])
        this.data[i].branch = this.data[i][this.branch]
      }
      this.status = 'Recommended College list'
    }, (err: HttpErrorResponse) => {
      console.log(err)
    })
  //   const element = this.renderer.selectRootElement('#results');
  //   element.scrollIntoView({ behavior: 'smooth' });
  //
 }
  
 
 
  ngOnInit(): void {
    this._services.getRegionList().subscribe((data: any[]) => {
      // Create a new Set to remove duplicates and then convert back to an array
      const uniqueRegions = Array.from(new Set(data.map(item => item.Region)));
      // Sort the array in alphabetical order
      this.RegionList = uniqueRegions.sort();
    });
    

 
    
  }

}




