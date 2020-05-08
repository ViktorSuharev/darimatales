import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhiteSnakeComponent } from './tales/white-snake/white-snake.component';
import { TwentyFifthComponent } from './tales/twenty-fifth/twenty-fifth.component';
import {NamelessChildComponent} from './tales/nameless-child/nameless-child.component';

const routes: Routes = [
  { path: 'white-snake', component: WhiteSnakeComponent },
  { path: 'twenty-fifth', component: TwentyFifthComponent },
  { path: 'nameless-child', component: NamelessChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
