import { CommonModule } from '@angular/common';
import { FilterComponent } from '../pages/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../components/logo/logo.component';
import { NgModule } from '@angular/core';
import { PaginationComponent } from '../components/pagination/pagination.component';

@NgModule({
  declarations: [LogoComponent, FilterComponent, PaginationComponent],
  imports: [CommonModule, FormsModule],
  exports: [LogoComponent, FilterComponent, PaginationComponent],
})
export class SharedModule {}
