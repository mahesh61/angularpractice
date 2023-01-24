import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AutocompleteComponent } from './concepts/autocomplete/autocomplete.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ParentComponent } from './parentchild/parent/parent.component';
import { ChildrenComponent } from './parentchild/children/children.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { ObservablesComponent } from './rxjs/observables/observables.component';
import { OperatorsComponent } from './rxjs/pipableoperators/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ReactFormsComponent, ChildComponent, HomeComponent, ProductsComponent, AboutComponent, ProductDetailsComponent, AutocompleteComponent, ParentComponent, ChildrenComponent, TemplateDrivenComponent, ReactiveformsComponent, ObservablesComponent, OperatorsComponent, PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
