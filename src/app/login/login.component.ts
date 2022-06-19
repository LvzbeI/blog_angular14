import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// Importar el micro servicio para las peticiones login al web service
import { BlogrestService } from '../blogrest.service';

// importar Toastr para alertas
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   titulo = "Log In";

  //  variables para el form
    user = "";
    pass = "";

    //variable para guardar los datos del usuario

    //Funcion Login (boton entrar)
  login(){
    // LLamada a la funcion login del servicio blogrest
    // En  El .suscribe() se retorna y guarda se la respuesta de la interfaz(login)  cuando el servidor conteste
    //  Normalmente se usa arrow function
    this.blogrest.login(this.user, this.pass).subscribe(


      data => {
        console.log(data);
        this.response(data);
        // this.blogrest.setCuenta('','','','');
        this.router.navigate(['/inicio']);
        this.msgBox.success('Bienvenido');
      },
      error => {
          console.log(error);
        this.msgBox.success('No se pudo iniciar sesion');
        console.log(error);
        this.msgBox.error('No se pudo iniciar sesion');
      }
      //  this.response, this.responseError
       );

      // this.blogrest.cuenta
}

   response(data:any){

    // aplicando destructuring al objeto
   const {user, nombre, rol} = data['user'];
   const token = data['token'];

  //enviando datos de sesion a la funcion del blogrest
  this.blogrest.setCuenta(user, nombre, rol, token);
  // this.blogrest.setCuenta(
  //   data['user']['user'],
  //   data['user']['nombre'],
  //   data['user']['rol'],
  //   data['token']);

  // console.log("user: "+ data['user']['user']);
  // Imprimir datos de sesion en consola
  // console.log('user: ' + user);
  // console.log('nombre: ' + nombre);
  // console.log('rol: ' + rol);
  // console.log('token: ' + token);

   }

  //  responseError(error:any){
  //   console.log(error);
  // }


  constructor(
    // variable para el routing
    private router: Router,
    // variable para las peticiones al web service
    private blogrest: BlogrestService,
    // variable para mensajes
    private msgBox: ToastrService
    ) {

   }


  ngOnInit(): void {

  }

}
