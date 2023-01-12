import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsdbBackendService {

  protected baseUrl = "https://www.thesportsdb.com/api/v1/json/2";

  constructor(protected http: HttpClient) { }
}
