import { Component } from '@angular/core';
import { Student } from '../../model';

@Component({
  selector: 'app-student-pages',
  standalone: false,
  
  templateUrl: './student-pages.component.html',
  styleUrl: './student-pages.component.scss'
})


export class StudentPagesComponent {
studentsApproved: Student[]=[
  {
    id:1,
    name:'Maria'
  },{
    id:2,
    name:'Pedro'
  },{
    id:3,
    name:'Juan'
  }
]

studentsReproved: Student[]=[
  {
    id:4,
    name:'Dani'
  },{
    id:5,
    name:'Daniela'
  },{
    id:6,
    name:'Dan'
  }
]

onRemove(idEstudianteAEliminar: number, from:'studentsApproved'|'studentsReproved'): void{
  console.log("Debo eliminar el id",idEstudianteAEliminar,"de: ", from);
  this[from] = this[from].filter((element)=>element.id!==idEstudianteAEliminar);
}
}
