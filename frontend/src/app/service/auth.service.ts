import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSubject$: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null)

  lastToken: string = ''
  loginUrl: string = `${this.config.apiUrl}/login`
  email: string =''
  role: string =''

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private router: Router) { 
    if (localStorage.currentXuser){
      // ha a localstorage-ban már benne van a user, nem kell újra belogolni
      const user: User = JSON.parse(localStorage.currentXuser)
      this.email = user.email || ''
      this.role = user.role || ''
      this.lastToken = user.accessToken || ''
      // aki feliratkozott a currentUserSubject-re, az itt értesülni fog
      this.currentUserSubject$.next(user)}}

  login(loginData: User): Observable<User | null> {
    return this.http.post<{user:User, accessToken: string}>(
      this.loginUrl, loginData
    ).pipe(map(
      e=>{
        if (e.user && e.accessToken){
          this.lastToken = e.accessToken
          this.email = e.user.email || ''
          this.role = e.user.role || ''
          e.user.accessToken = e.accessToken
          // a feliratkozókat értesítem a változásról
          this.currentUserSubject$.next(e.user)
          localStorage.currentXuser = JSON.stringify(e.user)
          return e.user
        }
        return null}))}

  logout():void{
    this.lastToken = ''
    this.currentUserSubject$.next(null)
    localStorage.removeItem('currentXuser')
    this.email=''
    this.role=''
    this.router.navigate(['/', 'login'])
  }}
