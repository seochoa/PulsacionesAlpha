import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-personaconsulta',
  templateUrl: './personaconsulta.component.html',
  styleUrls: ['./personaconsulta.component.css']
})
export class PersonaconsultaComponent implements OnInit {
  personas:Persona[]
  searchText:string;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.get();    
  }

  get(){
    this.personaService.get().subscribe(result => {
      this.personas = result;
      });
      
  }

}
