import Instrumento from "../modelos/Instrumento";
import { FuncionesApiGenerics } from "./FuncionesApiGenerics";

export async function getInstrumentosJSONFetch() {

	const funciones = new FuncionesApiGenerics<Instrumento>();
	return await funciones.getAll();

}

export async function getInstrumentosPorIdFetch(id: number) {

	const funciones = new FuncionesApiGenerics<Instrumento>();
	return await funciones.getById(id);
}

export async function getInstrumentosPorBusqueda(termino:string){

	const funciones = new FuncionesApiGenerics<Instrumento>();
	return await funciones.getBySearch(termino);
}

export async function deleteInstrumentoPorId(id:number){

	const funciones = new FuncionesApiGenerics<Instrumento>();
	return await funciones.deleteById(id);
}

export async function saveInstrumento(instrumento?: Instrumento, id?: number){

	id = instrumento?.id || 0;
	const funciones = new FuncionesApiGenerics<Instrumento>();
	return await funciones.save(instrumento, id);
}