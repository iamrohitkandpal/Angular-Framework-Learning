import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  courseName: string = "Angular Stuff"
  productNum: number = 12340
  maxLen: number = 5
  minChar: number = 3
  myClassName: string = "myColor"

  constructor() {
  }

  showWelcomeMessage() {
    alert("Welcome to Angular 20")
  }
  changeCourseName() {
    this.courseName = "Full Angular Learning"
  }
  onCityChange(e: any) {
    alert(`City Changed to: ${e.target.value}`)
  }
}
