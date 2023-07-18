import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsPage } from './details.page';

import { Tab1PageRoutingModule } from './details-routing.module';
import { CocktailService } from '../cocktail.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [DetailsPage],
  providers: [CocktailService]
})
export class DetailsModule {}
