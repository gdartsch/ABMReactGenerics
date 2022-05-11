export interface iBaseFuncionesApi<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
    getBySearch(termino: string): Promise<T[]>;
    deleteById(id: number): void;
    save(elemento?: T, id?: number): Promise<void>;
}