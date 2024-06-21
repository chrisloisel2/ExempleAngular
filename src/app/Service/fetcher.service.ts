import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FetcherService {

	constructor(public http: HttpClient) { }

	// Crud Jeux video

	getJeux() {
		return this.http.get('https://backbddgamedeploi.azurewebsites.net/jeux');
	}

	getJeuxById(id: number) {
		return this.http.get('https://backbddgamedeploi.azurewebsites.net/jeux/' + id);
	}

	addJeux(jeu: any) {
		return this.http.post('https://backbddgamedeploi.azurewebsites.net/jeux', jeu);
	}

	deleteJeux(id: number) {
		return this.http.delete('https://backbddgamedeploi.azurewebsites.net/jeux/' + id);
	}

}
