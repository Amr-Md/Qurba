import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { ListingRoutingModule } from './listing-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListingComponent, CardComponent],
  imports: [CommonModule, ListingRoutingModule, SharedModule],
})
export class ListingModule {}
