import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulo para forms reactivos
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// Modulo para el routing
import {  RouterModule, Route} from '@angular/router';
//  Modulo para la conexion con el web service
import { HttpClientModule} from '@angular/common/http';
// Modulo para mensajes personalizados
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';




//  Modulos que se van creando solos
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';


// Manejo de rutas
const rutas: Route[] = [
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'inicio', component: InicioComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
