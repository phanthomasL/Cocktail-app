import {HttpClient} from "@angular/common/http";
import { CocktailList } from "./model/cocktail.model";
import { Injectable } from "@angular/core";

/**
 * Service used to fetch data from the CocktailDB API.
 */
@Injectable({
    providedIn: 'root',
  })
export class CocktailService{

    constructor(private http: HttpClient) { } 

    /**
     * Retrieves a list of all cocktails with alcoholic and non-alcoholic drinks.
     * @returns A CocktailList object containing an array of drinks.
     */
    public async getCocktails() : Promise<CocktailList> {
        try {
            const alcoholicCocktails = await this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic').toPromise() as CocktailList;
            const non_AlcoholicCocktails = await this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').toPromise() as CocktailList;
            alcoholicCocktails.drinks.push(...non_AlcoholicCocktails.drinks);
            return alcoholicCocktails;
        } catch (error) {
            console.log(error);
            return {drinks: []};
        }
    }

    /**
     * Retrieves a list of cocktails by name.
     * @param name The name of the cocktail to search for.
     * @returns A CocktailList object containing an array of drinks.
     */
    public async getCocktailByName(name: string) : Promise<CocktailList>{
        try {
            const cocktails = await this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+name).toPromise();
            return cocktails as CocktailList;
        } catch (error) {
            console.log(error);
            return {drinks: []};
        }
    }

    /**
     * Retrieves a list of cocktails by ingredient.
     * @param ingredient The ingredient to search for.
     * @returns A CocktailList object containing an array of drinks.
     */
    public async getCocktailByIngredient(ingredient: string) : Promise<CocktailList>{
        try {
            const cocktails = await this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ingredient).toPromise();
            return cocktails as CocktailList;
        } catch (error) {
            console.log(error);
            return {drinks: []};
        }
    }

    public async getCocktailById(id: string) : Promise<CocktailList>{
        try {
            const cocktail = await this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id).toPromise();
            return cocktail as CocktailList;
        } catch (error) {
            console.log(error);
            return {drinks: []};
        }
    }
}

