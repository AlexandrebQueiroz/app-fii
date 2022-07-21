
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

  geo: Geo[]
}


export interface Geo {
  center:{
    lat:  number,
    lng: number
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
