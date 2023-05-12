import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductModelDto } from 'src/app/entities/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];
  selectedProduct: UpdateProductModelDto={}

  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    //this.getProducts();
   //this.getProduct();
    //this.updateProduct();
    //this.createProduct();
    this.deleteProduct(513);
  }
 getProducts(){
   this.productHttpService.getAll().subscribe(
    response=>{
       this.products= response
      console.log(response)}
      )
 }
 getProduct(){
   this.productHttpService.getOne(327).subscribe(
    response=>{
      console.log(response)})
 }
 createProduct(){
  const data = {
    title: 'Salas',
    price: 1100,
    description: 'Sala modular en colo beigi / Estefany Patricia',
    images: [
      'https://norte.dico.com.mx/media/catalog/product/cache/ddfdab190e55251eefb307178e423bf7/s/a/sala-modular-capital-calabaza-moderno-decorado-sal20754s1-2_1.jpg',
    ],
    categoryId: 1,
  };
  this.productHttpService.store(data).subscribe(
    response=>{
      console.log(response)})
 }
 editProduct(product: ProductModel){
  this.selectedProduct = product
 }
 updateProduct(){
  const data = {
    title: 'Comedor Clasico',
    price: 1800,
    description: 'tapizado / Estefany Patricia',
  };
  this.productHttpService.update(327,data).subscribe(
    response => {
      console.log(response)})
 }
 deleteProduct(id:ProductModel['id']){
  this.productHttpService.destroy(id).subscribe(
    response => {
      this.products= this.products.filter(product => product.id != id);
      console.log(response)})
 }

}