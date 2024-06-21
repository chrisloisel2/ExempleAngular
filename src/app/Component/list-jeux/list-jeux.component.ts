import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../../Service/fetcher.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-list-jeux',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './list-jeux.component.html',
	styleUrl: './list-jeux.component.css'
})
export class ListJeuxComponent implements OnInit {

	jeux: any = [];

	constructor(public fetcher: FetcherService) { }

	ngOnInit() {
		this.fetcher.getJeux().subscribe((data: any) => {
			console.log(data);
			this.jeux = data;
		});
	}


}
