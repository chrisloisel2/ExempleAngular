import { Routes } from '@angular/router';
import { ListJeuxComponent } from './Component/list-jeux/list-jeux.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: ListJeuxComponent },
];
