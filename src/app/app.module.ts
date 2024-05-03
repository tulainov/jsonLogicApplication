import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpressionsComponent } from './expressions/expressions.component';
import {FormsModule} from "@angular/forms";
import { DecisionTreeComponent } from './decision-tree/decision-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionsComponent,
    DecisionTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
