import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Observable, Subject, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl: string = "http://localhost:3003/";
  private options: RequestOptions;
  token = undefined;
  public ob: any;

  constructor(private http: Http) {
    this.token = localStorage.getItem("usuario");
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.token);
    this.options = new RequestOptions({ headers: header });
  }

  //usuario
  logar(login, senha): Observable<any> {
    return this.http.post(this.apiUrl + 'user/login', { login, senha })
      .pipe(
        map(
          res => {
            console.log(res.json())
            this.token = res.json().token;
            localStorage.setItem('token',this.token);
            localStorage.setItem('usuario', JSON.stringify(res.json()));
            let header = new Headers();
            header.append('Content-Type', 'application/json');
            header.append('Authorization', this.token);
            this.options = new RequestOptions({ headers: header });
            return res.json();
          }
        )
      );
  }

  cadastrar(user): Observable<any> {
    return this.http.post(this.apiUrl + 'user', user)
      .pipe(
        map(res => { return res.json() })
      );
  }

  cadastrarPolitico(user): Observable<any> {
    return this.http.post(this.apiUrl + 'politicos', user, this.options)
      .pipe(
        map(res => { return res.json() })
      );
  }
  cadastrarProjeto(projeto): Observable<any> {
    return this.http.post(this.apiUrl + 'projetos', projeto, this.options)
      .pipe(
        map(res => { return res.json() })
      );
  }

  //obras
  buscar(): Observable<any> {
    return this.http.get(this.apiUrl + 'projetos', this.options)
      .pipe(
        map(
          res => {
            console.log(res.json())
            return res.json()
          }
        ));
  }

  getProjeto(id):Observable<any> {
    this.ob=(this.ob)?this.ob:{_id:""}
    return this.http.get(this.apiUrl + 'projetos/'+id+"?populate=envolvidos&populate=afavor&populate=contra", this.options)
      .pipe(
        map(
          res => {
            console.log(res.json())
            return res.json()
          }
        ));
  }

  getPolitico(id):Observable<any> {
    return this.http.get(this.apiUrl + 'politicos/'+id, this.options)
      .pipe(
        map(
          res => {
            console.log(res.json())
            return res.json()
          }
        ));
  }

  buscarPoliticos(): Observable<any> {
    return this.http.get(this.apiUrl + 'politicos', this.options)
      .pipe(
        map(
          res => {
            console.log(res.json())
            return res.json()
          }
        ));
  }

  ranking(): Observable<any> {
    return this.http.get(this.apiUrl + 'projetos/rank', this.options)
      .pipe(
        map(res => {
          console.log(res.json())
          return res.json()
        }
        )
      );
  }

  up(projeto) {
    return this.http.put(this.apiUrl+"projetos/" + projeto._id, projeto, this.options)
      .pipe(
        map(res => {
          console.log(res.json())
          return res.json()
        }
        )
      );
  }
}
