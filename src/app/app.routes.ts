import { Routes } from '@angular/router';
import { Menu1Component } from './components/menu1/menu1.component';
import { Menu2Component } from './components/menu2/menu2.component';

export const routes: Routes = [
    { path: 'menu1', component: Menu1Component },
    { path: 'menu2', component: Menu2Component },
];
