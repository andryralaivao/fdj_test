import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  protected baseUrl = 'http://localhost:3000';
  
  constructor(protected http: HttpClient) { }
}
