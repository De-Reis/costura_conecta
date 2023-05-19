import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from 'src/app/features/models/search.model'
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  titulo = "Procurar";

  exibeProcura = true;

  searchs: Array<Search> = this.searchService.getSearchs()


  constructor(
    private searchService: SearchService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  detalhesRegistes(idRegister: number) {
    this.router.navigateByUrl(`product-details/${idRegister}`);
  }
}
