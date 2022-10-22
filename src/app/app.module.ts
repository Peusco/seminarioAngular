import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSemComponent } from './nav-sem/nav-sem.component';
import { AppShirtsListComponent } from './app-shirts-list/app-shirts-list.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ShirtStoreComponent } from './shirt-store/shirt-store.component';
import { InputIntComponent } from './input-int/input-int.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSemComponent,
    AppShirtsListComponent,
    FooterComponent,
    CartComponent,
    AboutComponent,
    ShirtStoreComponent,
    InputIntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
