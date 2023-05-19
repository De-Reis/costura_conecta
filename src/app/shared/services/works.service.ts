import { Injectable } from '@angular/core';
import { Work } from 'src/app/features/models/work.model'


@Injectable({
  providedIn: 'root'
})
export class WorksService {

  works: Array<Work> = [
    {
      id: 1,
      title: "Calça e Short",
      descricao: "Barra original, Barra simples, Pinça, Troca de elástico, troca de zíper, ajuste lateral",
      apartir: 16,
      imagem: "../../../assets/calça.png",
      costureira: true,

    },

    {
      id: 2,
      title: "Saia",
      descricao: "Ajuste de cós, Ajuste lateral, Troca de forro, Barra, troca de zíper, aplicação de botão",
      apartir: 10,
      imagem: "../../../assets/saia.png",
      costureira: true,
    },

    {
      id: 3,
      title: "Camisa e Polo",
      descricao: "Ajuste de mangas, Ajuste de ombros, Contorno do colarinho, Acrescímo de aplicação",
      apartir: 20,
      imagem: "../../../assets/camisa.png",
      costureira: false,
    },

    {
      id: 4,
      title: "Casaco e jaqueta",
      descricao: "Acréscimo de casa, Ajuste de mangas, Ajuste de ombros, Contorno da lapena",
      apartir: 32,
      imagem: "../../../assets/jaqueta.png",
      costureira: true,
    },
  ]

  constructor() { }

  getWorks(){
    return this.works;
  }



}
