import { CategoryModel } from "../entities/category.models";

export interface ProductModel{
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: CategoryModel;
}
//Omit: Omite algunos campos
export interface CreateProductModelDto extends Omit<ProductModel,'id' | 'category'>{
  categoryId:number;  //omite el id y la categoria

}
//Partial: toma algunos campos para cambiarlos
// ? opcional
export interface UpdateProductModelDto extends Partial<ProductModel> {
  categoryId?:number; //para que no sea necesaio actualizar uno por por si no el que deseamos

}