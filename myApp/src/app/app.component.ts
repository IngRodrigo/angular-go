import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //todo lo que esta aqui se podra usar en el template html
  title = 'Lista de estudiantes';
  listEstudiantes:any[]=[
  {nombre:"Rodrigo", estado:"aprobado"},
  {nombre:"Juan", estado:"Regular"},
  {nombre:"Jorge", estado:"aprobado"}
  ];
  mostrar=true;
  
  mostrarLista(){
    if(this.mostrar){
      this.mostrar=false;
    }else{
      this.mostrar=true;
    }
  }

}
