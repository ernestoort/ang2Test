import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  getStocks(): string[] {
    return ['aapl', 'ibm', 'googl', 'ibm'];
  }

}
