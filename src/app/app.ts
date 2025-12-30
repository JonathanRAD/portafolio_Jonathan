// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar'; // Importamos tu componente
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer], // Agregamos los componentes al array
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // Asegúrate de tener este archivo aunque esté vacío por ahora
})
export class App {
  title = 'mi-portafolio';
}