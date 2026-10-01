import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';



@Component({
  imports: [Navbar, Sobre], // Hander Bory = RouterOutlet
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App { // Raiz/Startuo do Projeto


}
