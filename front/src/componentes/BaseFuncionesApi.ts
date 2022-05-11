import { iBaseFuncionesApi } from "./iBaseFuncionesApi";

export class BaseFuncionesApi<T> implements iBaseFuncionesApi<T> {
    constructor(private urlServer: string) { }
    async getAll(): Promise<T[]> {
        let response = await fetch(this.urlServer, {
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
        let urlServer = this.urlServer + '/' + id;
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
    async getBySearch(termino: string): Promise<T[]> {
        let urlServer = this.urlServer + '/busqueda/' + termino;
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
        let urlServer = this.urlServer + '/' + id;
        await fetch(urlServer, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors'
        });
    }
    async save(elemento?: T): Promise<void> {
        let method: string = "POST";
        if (elemento) {
            method = "PUT";
        }
        let response = await fetch(this.urlServer, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors',
            body: JSON.stringify(elemento)
        }
        );
        return await response.json();
    }
}