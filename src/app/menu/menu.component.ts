import { Component, OnInit } from '@angular/core';
import { BlogrestService } from '../blogrest.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user = '';
  rol = '';
  constructor(private blogrest: BlogrestService) { }

  ngOnInit(): void {
    this.user = this.blogrest.getCuenta().user;
    this.rol = this.blogrest.getCuenta().rol;
  }

}
