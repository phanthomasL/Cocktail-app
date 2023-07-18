import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CocktailList } from '../model/cocktail.model';
import { ActivatedRoute } from '@angular/router';
import { Drink } from '../model/drink.model';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage implements OnInit{
  id: string | null = null;
  drink: Drink | null = null;

  constructor(private cocktailService: CocktailService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      const cocktail = await this.cocktailService.getCocktailById(this.id);
      this.drink = cocktail.drinks[0];
    }
  }

}
