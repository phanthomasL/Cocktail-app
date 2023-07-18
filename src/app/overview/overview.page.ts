import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CocktailList } from '../model/cocktail.model';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.page.html',
  styleUrls: ['overview.page.scss']
})
export class OverviewPage implements OnInit{
  cocktails: CocktailList = {drinks: []};

  constructor(private cocktailService: CocktailService) {}

  async ngOnInit() {
    this.cocktails = await this.cocktailService.getCocktails();
  }

}
