import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//providein root để dùng đc tất trong các module của app
//interface trong typecript
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //   private baseUrl = environment.categoryUrl + '/v1/tthc';

  constructor(private http: HttpClient) {}

  login(data: any) {
    console.log(data)
    // return this.http.get<any>(`${this.baseUrl}/check-ten-tphs?ten=${ten}`);
    return this.http.post<any>('http://localhost:3000/login', data);
  }
  //chinh la fetch hoac ajax hoac axios cua js
}
