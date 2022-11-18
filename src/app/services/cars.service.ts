import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  //Funciones para hacer el CRUD

  public getAllLamborghini(): Observable<any> {
    return this.http.get("https://lamborghini-ferrari-api.vercel.app/lamborghini");
  };

  public getLamborghini(_id:string): Observable<any> {
    return this.http.get("https://lamborghini-ferrari-api.vercel.app/lamborghini/" + _id);
  };

  public getAllFerraris(): Observable<any> {
    return this.http.get("https://lamborghini-ferrari-api.vercel.app/ferrari");
  };

  public getFerrari(_id:string): Observable<any> {
    return this.http.get("https://lamborghini-ferrari-api.vercel.app/ferrari/" + _id);
  };

}

