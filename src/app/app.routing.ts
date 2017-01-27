import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StocksComponent} from './stocks.component';

const routes: Routes = [
  {path: 'stocks', component: StocksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StocksComponentRoutingModule {
}

export const routedComponents = [StocksComponent];
