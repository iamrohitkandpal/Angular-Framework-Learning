import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  paraVivibilty: boolean = false;
  startingMonth: string = "jan";

  cityList: string[] = ["Pune", "Angpur", "Bilai"]

  studentList: any[] = [
    {name: "aaaa", city: "Ahmedabad", isActive: false},
    {name: "bbbb", city: "Mumbai", isActive: false},
    {name: "cccc", city: "Ghatgobar", isActive: true},
  ]
  visibility() {
    this.paraVivibilty = !this.paraVivibilty
  }
}
