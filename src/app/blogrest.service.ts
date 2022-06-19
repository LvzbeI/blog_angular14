import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

// Ruta para las peticiones http
const URL: string = 'http://localhost/blogrest/public/';

@Injectable({
  providedIn: 'root',
})
export class BlogrestService {

  // Crear objeto con datos del usuario
  private cuenta = {
    user: '',
    nombre: '',
    rol: '',
    token: ''
}

  setCuenta(
    user:any,
    nombre:string,
    rol:string,
    token:string)
    {
    this.cuenta.user= user;
    this.cuenta.nombre= nombre;
    this.cuenta.rol= rol;
    this.cuenta.token= token;

    //Almacenar datos de la sesion en LocalStorage
    localStorage.setItem('user',user)
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('rol',rol)
    localStorage.setItem('token',token)
  }


  getCuenta(){

// this.cuenta.user = JSON.parse(localStorage.getItem('user')|| "");

// this.cuenta.nombre = JSON.parse(localStorage.getItem('nombre')|| "");
// this.cuenta.rol = JSON.parse(localStorage.getItem('rol')|| "");
// this.cuenta.token = JSON.parse(localStorage.getItem('token')|| "");

 this.cuenta.user = localStorage.getItem('user');
    this.cuenta.nombre = localStorage.getItem('nombre');
    this.cuenta.rol = localStorage.getItem('rol');
    this.cuenta.token = localStorage.getItem('token');
    return this.cuenta;
  }

  constructor(
    //  variable para las peticiones
    private http: HttpClient
  ) {}

  // Funcion para consultar usuario y contrasenia
  // Est funcion nos sirve de interfaz para hacer peticion y retornar algo
  login(user: string, pass: string) {
    return this.http.get(URL + 'login/' + user + '/' + pass);
  }

    // Mostrar la lista de temas
  topics(){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    //console.log(this.cuenta.token);
    return this.http.get(URL + "topic", {headers:headers});
  }


  // Funcion para aniadir temas
  addTopic(tema:string){
    let headers = new HttpHeaders;
    let form = new FormData;
    form.append('tema', tema);
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.post(URL + "topic", form, {headers:headers});
  }

  editTopic(topic){
    let headers = new HttpHeaders;
    let param = new HttpParams;
    param = param.append('tema', topic.tema);
    headers = headers.append('Authorization', this.cuenta.token);
    console.log(this.cuenta.token);
    return this.http.put(URL + "topic/" + topic.id, {headers:headers, params: param});
  }

  delTopic(topic){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    console.log(this.cuenta.token);
    return this.http.delete(URL + "topic/" + topic.id, {headers:headers});
  }



}
