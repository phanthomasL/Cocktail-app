import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverviewPage } from './overview.page';

import { OverviewRoutingModule } from './overview-routing.module';
import { CocktailService } from '../cocktail.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OverviewRoutingModule
  ],
  declarations: [OverviewPage],
  providers: [CocktailService]
})
export class OverviewModule {}
