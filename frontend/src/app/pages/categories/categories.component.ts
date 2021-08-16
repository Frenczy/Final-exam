import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { CategoryService } from 'src/app/service/category.service';
import { NotificationService } from 'src/app/service/notification.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

interface IPageBtn {
  page: number;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  cols: ITableCol[] = this.config.categoriesTableColumns;
  categories$: Observable<Category[]> = this.categoryService.list$.pipe(
    tap( category => this.categoryProperties.count = category.length )
  );

  filterKey: string = '--Select searching key--';
  filterKeys: string[] = ['--Select searching key--', ...Object.keys(new Category())].filter(e=>e!='_id');

  constructor(
    private config: ConfigService,
    private categoryService: CategoryService,
    private notifyService : NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll();
  }

  category: Category = new Category();

  onUpdate(category: Category): void {

    if (category.id === 0) {
      this.categoryService.create(category);
    }

    this.categoryService.update(category);
  }

  onDelete(category: Category): void {
    this.categoryService.remove(category).subscribe(
      () => this.categoryService.getAll()
    )
  }

  showHtmlToasterDelete(){
    this.notifyService.showHTMLMessage(`Deleting was successful.`, ``, 3000)
  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  categoryProperties: {count: number} = {
    count: 0,
  };
  pageSize: number = 20;
  pageStart: number = 1;
  currentPage: number = 1;
  get paginator(): IPageBtn[] {
    const pages: IPageBtn[] = [];
    for (let i = 0; i < this.categoryProperties.count / this.pageSize && pages.length < 10; i++ ) {
      const page = this.pageStart + i;
      pages.push({page});
    }
    return pages;
  }
  get pageSliceStart(): number {
    const index = this.currentPage - 1;
    return index === 0 ? 0 : (index * this.pageSize);
  }
  get pageSliceEnd(): number {
    return this.pageSliceStart + this.pageSize;
  }

  onPaginate(event: Event, btn: IPageBtn): void {
    event.preventDefault();
    this.currentPage = btn.page;
    this.pageStart = (btn.page - 5) < 1 ? 1 : (btn.page - 5);
  }

  onStepPage(event: Event, step: number): void {
    event.preventDefault();
    this.currentPage += step;
    this.pageStart = (this.currentPage - 5) < 1 ? 1 : (this.currentPage - 5);
  }

  columnKey: string = '';
  sortDir: number = -1;

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.sortDir = this.sortDir * (-1);
  }
}
