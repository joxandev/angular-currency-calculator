import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { Store } from '../store/store.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService, Store],
  declarations: [],
  exports: []
})
export class CoreModule {}
