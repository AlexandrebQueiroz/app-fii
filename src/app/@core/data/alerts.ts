import { FlexibleConnectedPositionStrategyOrigin } from "@angular/cdk/overlay";

export interface Alerts {

  level?:string;
  stage?:string;
  createdAt?: Date;


  veicle?: {
    plate?: string,
    date?: string
  },

  pass?:{
    direction?: string,
    motive?: string
  },

  entity?: {
    date?: string,
  },

  out?:{
    date?: string,
    name?: string
  },

  emit?:{
    Nome?:string,
    DEST?:string,
    CPFCNPJ?:string,
    Placa?:string,
    Reboque1?:string,
    ocurrence?:string,
    key?: string
  },

  geo?:{
    center:{
      lat:  number,
      long: number
    },
    points:[
      {
        label: string
        location: {lat: number, lng: number}
      },
      {
        label: string,
        location: {lat: number, lng: number}
      },
      {
        label:string,
        location: {lat: number, lng: number}
      }
    ]
  }

}
