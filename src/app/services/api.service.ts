import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const headerConfig = { "authorization":`
Bearer 7f1890a8b4e2a81ec0ab4b144d9a6872d0efd509153840dc5dd88b4512753f70809a5368f272294f823331d66ae0a73e76e9d8d7e2cd95a9d12a205a61ee37164a8b039b9433f01e232b6ad678057425517abaf2de49710c726bbe99ed617ded0ae43d9f5272128a5a4ba8fc32aed0703752914222f6134bec6b64fa61592e51`}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // host = "https://art-strapi.onrender.com/api/"
  host = "https://sketching-with-naval.onrender.com/api/"
  addFlag=`?populate=*`
  constructor(public http: HttpClient) {

  }
  getArt() {
    return this.http.get(`${this.host}art-collections${this.addFlag}`)
  }
  getSizeOptions(){
    return this.http.get(`${this.host}size-options`)
  }
  getFaceOptions(){
    return this.http.get(`${this.host}face-options`)
  }

}
