import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Search } from 'src/app/features/models/search.model';
import { SearchService } from 'src/app/shared/services/search.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  search?: Search;

  telefone = "351910564784";

  constructor(
    private activedRoute: ActivatedRoute,
    private searchService: SearchService,
    private router: Router,) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['cardId']);
      this.search = this.searchService.getById(id);
      console.log(this.search)

    } )
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
