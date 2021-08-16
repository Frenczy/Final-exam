import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/model/category';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { CategoryService } from 'src/app/service/category.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  fields: ITableCol[] = this.configService.categoriesTableColumns.filter(
    column => column.visible
  );
  updating : boolean = false;
  categories$: Observable<Category | undefined> = of(new Category() );
  categoryList$: Observable<Category[]> = this.categoryService.list$
  category: Category = new Category();
  calculatedID: number = 0;
  newItem: boolean = false

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll();
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params.id);
        if (params.id == 0) {
          this.categoryList$.subscribe(e=> {this.calculatedID=(e.map(e=>e.id).sort((a,b)=>a-b)[e.length-1]+1)})
          this.categories$ = of( new Category() );
          this.newItem = true
        } else {
          this.categories$ = this.categoryService.get(params.id)
            .pipe(tap(e=>{
              this.calculatedID=e.id;
            }));
          this.newItem = false
        }
      })
  }


  showHtmlToasterUpdate(){
    this.notifyService.showHTMLMessage(`Updating was successful.`, ``, 3000)
  }

  onUpdate(form: NgForm, category: Category): void {

    this.updating = true;
    if (this.newItem==true){
      category.id=this.calculatedID
      this.categoryService.create(category).subscribe(
      () => this.router.navigate(['categories']))} else
    this.categoryService.update(category).subscribe(
      () => this.router.navigate(['categories'])
    )
  }

}
