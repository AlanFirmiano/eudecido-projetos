import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Observable, Subject, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl: string = "http://localhost:3003/"
  private options: RequestOptions;

  public ob: any;

  constructor(private http: Http) { }

  //usuario
  logar(login, senha): Observable<any>{
    return this.http.post(this.apiUrl+'user/login', {login, senha})
    .pipe(
      map(
      res => {
        return res.json()
      }
    )
  );
  }

  cadastrar(user): Observable<any>{
    return this.http.post(this.apiUrl+'user', user)
    .pipe(
      map(res => { return res.json()})
    );
  }

  cadastrarPolitico(user): Observable<any>{
    return this.http.post(this.apiUrl+'user/politico', user)
    .pipe(
      map(res => { return res.json()})
    );
  }
  cadastrarProjeto(projeto): Observable<any>{
    return this.http.post(this.apiUrl+'projetos', projeto)
    .pipe(
      map(res => { return res.json()})
    );
  }

  //obras
  buscar(): Observable<any>{
    return this.http.get(this.apiUrl+'projetos', this.options)
      .pipe(
        map(
        res => {
          console.log(res.json())
          return res.json()
        }
      ));
  }

  ranking(): Observable<any>{
    return this.http.get(this.apiUrl+'projetos/rank', this.options)
      .pipe(
        map(res => {
          console.log(res.json())
          return res.json() }
        )
      );
  }

  up(obra){
    return this.http.put(this.apiUrl+obra._id, obra, this.options)
      .pipe(
        map(res => {
          console.log(res.json())
          return res.json() }
        )
      );
  }
}
