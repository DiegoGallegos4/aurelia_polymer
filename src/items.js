import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client'; 
import 'fetch';

@inject(HttpClient)
export class Items {
	heading = 'Inventario';
	items = [];
	keys = ['Codigo','Descripcion','Categoria','Unidad','Cantidad'];

	constructor(http){
		http.configure(config => {
			config
			.useStandardConfiguration()
			.withBaseUrl('http://localhost:5000/');
		});

		this.http = http;
	}

	activate(){
		return this.http.fetch('items')
			.then(response => response.json())
			.then(items => {
				this.items = JSON.parse(items);
				console.log(this.items[0])
			})
			.catch(function(error){
				console.log(error);
			})
	}
	
}