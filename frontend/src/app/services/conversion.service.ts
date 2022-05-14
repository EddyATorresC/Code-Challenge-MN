import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Conversion {

  private endpoint = environment.apiEndpoint;
  constructor(private httpClient: HttpClient) { }


  PoundsToKilograms(value: any){
    return this.httpClient.post<any>(`${this.endpoint}lb-to-kg`, value);
  }

  KilogramsToPounds(value: any){
    return this.httpClient.post<any>(`${this.endpoint}kg-to-lb`, value);
  }
  
  CalculateKilogramsPounds(value: any){
    return this.httpClient.post<any>(`${this.endpoint}calculate-kg-lb`, value);
  }


}
