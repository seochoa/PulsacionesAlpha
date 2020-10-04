import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { PersonaRegistroComponent } from './pulsacion/persona-registro/persona-registro.component';
import { PersonaconsultaComponent } from './pulsacion/personaconsulta/personaconsulta.component';

const routes: Routes=[
  {path: "registro" , component: PersonaRegistroComponent},
  {path: "consulta", component: PersonaconsultaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
