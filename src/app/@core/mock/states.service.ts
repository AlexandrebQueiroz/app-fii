import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { State } from '../data/state';

@Injectable()
export class StatesService {
  private states: State[] = [
    { name: 'AC', initial: 'Acre' },
    { name: 'AL', initial: 'Alagoas' },
    { name: 'AP', initial: 'Amapá' },
    { name: 'AM', initial: 'Amazonas' },
    { name: 'BA', initial: 'Bahia' },
    { name: 'CE', initial: 'Ceara' },
    { name: 'DF', initial: 'Distrito Federal' },
    { name: 'ES', initial: 'Espírito Santo' },
    { name: 'GO', initial: 'Goiás' },
    { name: 'MA', initial: 'Maranhão' },
    { name: 'MT', initial: 'Mato Grosso' },
    { name: 'MS', initial: 'Mato Grosso do Sul' },
    { name: 'MG', initial: 'Minas Gerais' },
    { name: 'PA', initial: 'Pará' },
    { name: 'PB', initial: 'Paraíba' },
    { name: 'PR', initial: 'Paraná' },
    { name: 'PE', initial: 'Pernambuco' },
    { name: 'PI', initial: 'Piauí' },
    { name: 'RJ', initial: 'Rio de Janeiro' },
    { name: 'RN', initial: 'Rio Grande do Norte' },
    { name: 'RS', initial: 'Rio Grande do Sul' },
    { name: 'RO', initial: 'Rondônia' },
    { name: 'RR', initial: 'Roraima' },
    { name: 'SC', initial: 'Santa Catarina' },
    { name: 'SP', initial: 'São Paulo' },
    { name: 'SE', initial: 'Sergipe' },
    { name: 'TO', initial: 'Tocantins' },
  ];

  constructor() {
  }

  getStates(): Observable<State[]> {
    return observableOf(this.states);
  }

}
