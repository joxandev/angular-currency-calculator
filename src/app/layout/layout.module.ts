import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { SelectListComponent } from './select-list/select-list.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, SelectListComponent, BannerComponent],
  exports: [HeaderComponent, SelectListComponent, BannerComponent]
})
export class LayoutModule {}
