import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { _id?: string}> {

  entityName: string = '';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(
    public http: HttpClient,
    public config: ConfigService,
    @Inject('entityName') entityName: string,
  ) {
    this.entityName = entityName;
  }

  getAll(): void {
    this.http.get<T[]>(`${this.config.apiUrl}/${this.entityName}`)
      .subscribe(
        list => this.list$.next(list)
      )
  }

  get(_id: string): Observable<T> {
    // id = parseInt(('' + id), 10);
    return this.http.get<T>(`${this.config.apiUrl}/${this.entityName}/${_id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.config.apiUrl}/${this.entityName}`,
      entity
    ).pipe(
      tap(
        () => this.getAll()
      )
    )
  }

  update(entity: T): Observable<T> {
    return this.http.put<T>(
      `${this.config.apiUrl}/${this.entityName}/${entity._id}`,
      entity);
  }

  remove(entity: T): Observable<T> {
    return this.http.delete<T>(
      `${this.config.apiUrl}/${this.entityName}/${entity._id}`,
    );
  }

}
