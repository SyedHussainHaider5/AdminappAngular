import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
  
 @Input() image!: string;
 @Input() text!: string;

}
// let myname = "Hussain";
// console.log(myname);
// const names:  string[] = [];
// names.push("Bukhari");
// console.log(names);
// const car: { type: string, model: string, year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009
// };
// console.log(car.year);

// const vehicle: {type: string, ev: boolean} = {
//   type: "car",
//   ev: true
// };
// console.log(vehicle.ev);

// function myfun(): number {
//   return 2;
// }
// console.log(myfun());

// class Person {
//   private name: string;

//   public constructor(name: string){
//     this.name = name;
//   }

//   public getName(){
//     return this.name;
//   }
// }
// const person = new Person("Bukhari"); 
// console.log(person.getName())