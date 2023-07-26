import { Component, OnInit } from '@angular/core';
import Place, { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lista-lugar',
  templateUrl: './lista-lugar.component.html',
  styleUrls: ['./lista-lugar.component.css']
})
export class ListaLugarComponent implements OnInit {

  places: Place[];

  constructor(
    private lugarService: LugarService
  ) { 
    this.places = [{
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      image: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }];
  }

  ngOnInit(): void {
    this.lugarService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  async onClickDelete(place: Place) {
    const response = await this.lugarService.deletePlace(place);
    console.log(response);
  }
}
