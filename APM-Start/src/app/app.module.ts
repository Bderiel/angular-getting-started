import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './products/product-list.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { convertToSpaces } from './products/convertToSpaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './home/productService/Product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailsComponent } from './products/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    convertToSpaces,
    StarComponent,
    WelcomeComponent
  ],
  providers: [
    ProductService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
