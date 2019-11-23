import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardBodyComponent } from './card-body/card-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
