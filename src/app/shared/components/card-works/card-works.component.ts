import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from 'src/app/features/models/work.model'
import { WorksService } from 'src/app/shared/services/works.service';

@Component({
  selector: 'app-card-works',
  templateUrl: './card-works.component.html',
  styleUrls: ['./card-works.component.scss']
})
export class CardWorksComponent implements OnInit {

  titulo = "Trabalhos";

  exibeTrabalho = true;

  works: Array<Work> = this.worksService.getWorks();


  constructor(
    private worksService: WorksService,
    private router: Router) { }


  ngOnInit(): void {
  }

}
