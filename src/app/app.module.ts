import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, CoreModule, LayoutModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
