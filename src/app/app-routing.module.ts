import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { ChildComponent } from './child/child.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [AuthGaurdService]
    , children: [
      { path: ":id", component: ProductDetailsComponent },
    ]

  },

  { path: "contact", component: AboutComponent },
  { path: "About", component: ChildComponent, data: { id: 5354, name: "mahesh", role: "Developer" } },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
