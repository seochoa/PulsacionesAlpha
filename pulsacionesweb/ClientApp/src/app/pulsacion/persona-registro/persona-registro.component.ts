import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  
  persona : Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona= new Persona();
  }

  calcularpulsacion(){

    if (this.persona.sexo === "F"){
      this.persona.pulsacion = (220 - this.persona.edad)/10
    }
    else{
      this.persona.pulsacion = (210 - this.persona.edad)/10
    }
    
  }

  add(){
    this.calcularpulsacion();
    alert('Se agrego una nueva persona' + JSON.stringify(this.persona));
    this.personaService.post(this.persona)
  }

}
