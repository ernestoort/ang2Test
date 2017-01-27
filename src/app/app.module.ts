import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MutualFundsComponent} from './mutual-funds/mutual-funds.component';
import {StocksComponent} from './stocks.component';
import {StockDirectiveDirective} from './stock-directive.directive';
import {HiglightDirective} from './higlight.directive';
import {StockService} from './stock.service';
import {DateFormatterPipe} from './date-formatter.pipe';
import {routedComponents} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    MutualFundsComponent,
    StockDirectiveDirective,
    HiglightDirective,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routedComponents
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
