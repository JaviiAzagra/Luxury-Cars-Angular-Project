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
  public postLamborghini(newLamborghini:any){
    return this.http.post("https://lamborghini-ferrari-api.vercel.app/lamborghini/create", newLamborghini)
  }
  public postFerrari(newFerrari:any){
    return this.http.post("https://lamborghini-ferrari-api.vercel.app/ferrari/create", newFerrari)
  }
  public putLamborghini(_id: string, updatedLamborghini:any){
    return this.http.put("https://lamborghini-ferrari-api.vercel.app/lamborghini/edit/" + _id, updatedLamborghini)
  }
  public putFerrari(_id: string, updatedFerrari:any){
    return this.http.put("https://lamborghini-ferrari-api.vercel.app/ferrari/edit/" + _id, updatedFerrari)
  }
  public deleteLamborghini(_id: string){
    return this.http.delete("https://lamborghini-ferrari-api.vercel.app/lamborghini/delete/" + _id)
  }
  public deleteFerrari(_id: string){
    return this.http.delete("https://lamborghini-ferrari-api.vercel.app/ferrari/delete/" + _id)
  }

}

