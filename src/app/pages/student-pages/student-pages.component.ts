import { Student } from '../../model';
import { StudentsListComponent } from '../../components/students-list/students-list.component';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student-pages',
  standalone: false,

  templateUrl: './student-pages.component.html',
  styleUrl: './student-pages.component.scss'
})


export class StudentPagesComponent implements AfterViewInit {
  debeMostrarModal = false;

  studentsApproved: Student[] = [
    {
      id: 1,
      name: 'Maria'
    }, {
      id: 2,
      name: 'Pedro'
    }, {
      id: 3,
      name: 'Juan'
    }
  ]

  studentsReproved: Student[] = [
    {
      id: 4,
      name: 'Dani'
    }, {
      id: 5,
      name: 'Daniela'
    }, {
      id: 6,
      name: 'Dan'
    }
  ]

  @ViewChild("titulosAprobados") titulosAprobados?: ElementRef<HTMLElement>
  @ViewChild(StudentsListComponent) studentsListComponent?: StudentsListComponent;

  constructor() {
    console.log(this.titulosAprobados)
  }
  
  ngAfterViewInit(): void {
    console.log(this.titulosAprobados)
    console.log(this.studentsListComponent)
  }

  onRemove(idEstudianteAEliminar: number, from: 'studentsApproved' | 'studentsReproved'): void {
    // console.log("Debo eliminar el id",idEstudianteAEliminar,"de: ", from);
    this[from] = this[from].filter((element) => element.id !== idEstudianteAEliminar);
  }
}
