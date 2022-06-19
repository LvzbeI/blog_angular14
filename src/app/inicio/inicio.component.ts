import { Component, OnInit } from '@angular/core';
// Importar el micro servicio para las peticiones login al web service
import { BlogrestService } from '../blogrest.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  topics: any = {id: '', tema: ''};
  tema = '';
  temaEdit : any;

  constructor(
    private blogrest: BlogrestService,
   private msgBox: ToastrService) { }

  // La siguiente funcion se ejecuta una vez que se carguen todos los componentes
  ngOnInit(): void {
      this.llenarTabla();
  }

 llenarTabla(){
    this.blogrest.topics().subscribe(
      data => {
        console.log(data);
        this.topics = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  agregar(){
    this.blogrest.addTopic(this.tema).subscribe(
      data => {
        this.llenarTabla();
      }
    );
  }
editarTema(topic){
    this.temaEdit = JSON.parse(JSON.stringify(topic));
  }

  guardarCambios(){
    this.blogrest.editTopic(this.temaEdit).subscribe(
      datos => {
        this.msgBox.success("Modificacion correcta");
        this.llenarTabla();
      },
      error => {
        this.msgBox.error("Error al modiciar");
        console.log(error);
      }
    );
  }

  eliminarTema(){
    this.blogrest.delTopic(this.temaEdit).subscribe(
      datos => {
        this.msgBox.success("Se elimino el tema");
        this.llenarTabla();
      },
      error => {
        this.msgBox.error("Error al eliminar");
        console.log(error);
      }
    );
  }


}
