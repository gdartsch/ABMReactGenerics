import { BaseFuncionesApi } from "./BaseFuncionesApi";
import Instrumento from "./Instrumento";

export class FuncionesApiGenerics<T> extends BaseFuncionesApi<T> {

	async getAll(): Promise<T[]> {
		let urlServer = "http://localhost:3001/api/instrumentos/";
		let response = await fetch(urlServer, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			mode: 'cors'
		});
		return await response.json();
	}


	async getById(id: number): Promise<T> {
		let urlServer = 'http://localhost:3001/api/instrumentos/' + id;
		let response = await fetch(urlServer, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			mode: 'cors'
		});
		return await response.json() as T;
	}

	async getBySearch(termino: string): Promise<T[]> {
		let urlServer = 'http://localhost:3001/api/instrumentos/busqueda/'+termino;
		let response = await fetch(urlServer, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			mode: 'cors'
		});
		return await response.json();
	}

	async deleteById(id: number): Promise<void> {
		let urlServer = 'http://localhost:3001/api/instrumentos/'+ id;
		await fetch(urlServer, {
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			mode: 'cors'
		});
	}

	async save(elemento?: T, id?: number): Promise<void> {
		let urlServer = 'http://localhost:3001/api/instrumentos';
		let method:string = "POST";
		if(elemento){
			urlServer = 'http://localhost:3001/api/instrumentos/'+id;
			method = "PUT";
		}
		await fetch(urlServer, {
			"method": method,
			"body": JSON.stringify(elemento),
			"headers": {
				"Content-Type": 'application/json'
			}
		});
	}
}