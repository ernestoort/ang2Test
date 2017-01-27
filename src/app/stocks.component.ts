import {Component, OnInit} from '@angular/core';
import {StockService} from './stock.service';

@Component({
  moduleId: module.id,
  selector: 'app-stocks',
  template: '<h2>Stocks</h2> {{title}}' +
  '<ul>' +
  '<li *ngFor="let stock of stocks"> ' +
  '{{stock}}' +
  '</li>' +
  '</ul>'
})
export class StocksComponent implements OnInit {

  title = 'List of stocks';
  stocks: string[];

  constructor(stockService: StockService) {
    this.stocks = stockService.getStocks();
  }

  ngOnInit() {
  }
}
