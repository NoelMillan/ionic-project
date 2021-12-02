import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterPage } from './center.page';

const routes: Routes = [
  {
    path: '',
    component: CenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterPageRoutingModule {}
