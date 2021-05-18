import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
//import { CryptoChartComponent } from './Components/crypto-chart/crypto-chart.component';

@NgModule({
  declarations: [
    AppComponent,
   // CryptoChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
