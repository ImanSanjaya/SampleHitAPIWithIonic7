import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http : HttpClient
  ) { }

  GetListUser(){
    return this.http.get(environment.ApiURL + '/api/users?page=2' , {} );
  }

  CreateUser(form : any){
    return this.http.post(environment.ApiURL + '/api/users',
      {
        "name": form.name ,
        "job": form.job
      },
      { responseType: 'json'}
    );
  }

  UpdateUser(id : any , form : any){
    return this.http.put(environment.ApiURL + '/api/users/' + id,
      {
        "name": form.name ,
        "job": form.job
      },
      { responseType: 'json'}
    );
  }

  public DeleteUser(id : any){
    return this.http.delete(environment.ApiURL + "/api/users/" + id);
  }

}
