import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = "Rohit"

  courseName: string = "Angular Full Course"

  courseValue = signal<string>("Very High")

  courseDuration = signal("2 hours")

  courseDetails = computed(() => this.courseValue()
    + " - " + this.courseDuration());

  constructor() {
    this.firstName = "Rohit"
    console.log(this.firstName);

    setTimeout(() => {
      this.courseValue.set("Medium")
    }, 5000)
    console.log(this.courseValue());

  }
}
