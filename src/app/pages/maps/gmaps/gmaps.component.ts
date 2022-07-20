import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})
export class GmapsComponent {
  readonly position = { lat: -13.0107167, lng: -38.5329841 };

  readonly points = [
    {
      label: "Farol da barra",
      location: {lat: -13.0113584, lng: -38.5326023}
    },
    {
      label: "Morro do cristo",
      location: {lat: -13.0107261, lng: -38.5241318}
    },
    {
      label: "Hotel hipis",
      location: {lat: -13.0131799, lng: -38.4942567}
    }

  ]
}
