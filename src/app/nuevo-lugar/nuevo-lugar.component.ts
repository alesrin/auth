
import { Component, OnInit } from '@angular/core';
import { LugarService } from '../lugar.service';
import { FormControl, FormGroup } from '@angular/forms';
 
@Component({
  selector: 'app-nuevo-lugar',
  templateUrl: './nuevo-lugar.component.html',
  styleUrls: ['./nuevo-lugar.component.css']
})
export class NuevoLugarComponent implements OnInit {

  formulario: FormGroup;

  constructor( private lugarService: LugarService) { 
    this.formulario = new FormGroup({
      name: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.lugarService.addPlace(this.formulario.value);
    console.log(response);
  }

}
