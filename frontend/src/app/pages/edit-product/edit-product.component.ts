import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  fields: ITableCol[] = this.configService.productsTableColumns.filter(
    column => column.visible
  );
  updating : boolean = false;
  product$: Observable<Product | undefined> = of(new Product() );
  product: Product = new Product();
  categories$: Observable<Category[]> = this.categoryService.list$
  products$: Observable<Product[]> = this.productService.list$
  calculatedID: number = 0
  newItem: boolean = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private categoryService: CategoryService,
    private router: Router,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
    this.categoryService.getAll();
    
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id == 0) {
          this.products$.subscribe(e=> {this.calculatedID=(e.map(e=>e.id).sort((a,b)=>a-b)[e.length-1]+1)})
          this.product$ = of( new Product() );
          this.newItem = true;
        } else {
          this.product$ = this.productService.get(params.id)
            .pipe(tap(e=>this.calculatedID=e.id));
          this.newItem = false
        }
      })
  }


  showHtmlToasterUpdate(){
    this.notifyService.showHTMLMessage(`Updating was successful.`, ``, 3000)}

  showHtmlToasterMissing(){
    this.notifyService.showMissingProperty(`Please select category.`, ``, 3000)}

  onUpdate(form: NgForm, product: Product): void {
    if (product.catID==0){this.showHtmlToasterMissing(); return} else {
      this.showHtmlToasterUpdate()
    this.updating = true;
    if (this.newItem == true){
      product.id=this.calculatedID; product.active=true;
      this.productService.create(product).subscribe(
      () => this.router.navigate(['products']))} else {
      product.active=true;
      this.productService.update(product).subscribe(
      () => this.router.navigate(['products'])
    )}
  }}

}
