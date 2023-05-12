import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateProductModelDto, ProductModel, UpdateProductModelDto } from '../entities/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  readonly API_URL = 'https://api.escuelajs.co/api/v1/products'; //serividor del url

  constructor(private httpClient: HttpClient) {} //inyectar dependencias

  getAll(): Observable<ProductModel[]> { //traer todos los objetos que tenga la pagina proporcinada
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProductModel[]>(url);
  }

  getOne(id: ProductModel['id']): Observable<ProductModel> { //traer un objeto mediante un id
    const url = `${this.API_URL}/${id}`;   //consumimos el id le  agreha un / y traer el id pedido
    return this.httpClient.get<ProductModel>(url);
  }

  store(product: CreateProductModelDto): Observable<ProductModel> { 
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProductModel>(url, product);
  }

  update(
    id: ProductModel['id'],
    product: UpdateProductModelDto
  ): Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductModel>(url, product);
  }

  destroy(id: ProductModel['id']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
