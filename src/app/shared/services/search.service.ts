import { Injectable } from '@angular/core';
import { Search } from 'src/app/features/models/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchs: Array<Search> = [
    {
      id: 1,
      nome: "Isabel",
      sobrenome: "Soares",
      especialidade: ["Diminuir / Alargar","Encurtar mangas", "Serviços diversos"],
      prazo: ["Urgente (1-2 dias)", "Normal (até duas semanas)"],
      distrito: "Lisboa",
      freguesia: "Benfica",
      morada: "Rua Benfica",
      codigo: 10000000,
      contato: "351910564784",
      social: "@isabel.soares",
    },
    {
      id: 2,
      nome: "Paulo",
      sobrenome: "Ferreira",
      especialidade: ["Diminuir / Alargar", "Ajustar cintura", "Serviços diversos"],
      prazo: ["Normal (até duas semanas)"],
      distrito: "Setubal",
      freguesia: "Almada",
      morada: "Rua Nuno Orta",
      codigo: 10000000,
      contato: "351910564784",
      social: "@paulo.ferreira",
    },
    {
      id: 3,
      nome: "Mariana",
      sobrenome: "Pires",
      especialidade: ["Ajustar cintura", "Dar volume", "Encurtar mangas"],
      prazo: ["Urgente (1-2 dias)"],
      distrito: "Porto",
      freguesia: "Campanhã",
      morada: "Rua Porto Campanhã",
      codigo: 10000000,
      contato: "351910564784",
      social: "@mariana.pires",
    },
    {
      id: 4,
      nome: "Judite",
      sobrenome: "Soares",
      especialidade: ["Dar volume", "Encurtar mangas", "Serviços diversos"],
      prazo: ["Urgente (1-2 dias)", "Normal (até duas semanas)"],
      distrito: "Lisboa",
      freguesia: "Benfica",
      morada: "Rua Benfica",
      codigo: 10000000,
      contato: "351910564784",
      social: "@Judite",
    },

  ]
  works: any;

  constructor() { }

  getSearchs(){
    return this.searchs;
  }

  getById(id: number){
    return this.searchs.find((search) => search.id === id);
  }

  create(search: Search) {
    search.id = this.generateNextId();
    this.searchs.push(search)
  }

  generateNextId(){
    return this.searchs[(this.searchs.length - 1)].id +1;
  }


}
