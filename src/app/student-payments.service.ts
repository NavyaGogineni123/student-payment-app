import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class StudentPaymentsService {
  private baseUrl = 'http://localhost:8081/spring-test/payments/student-name';

  constructor(private http: HttpClient) { }

  getPayment(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.baseUrl}/${id}`);
  }

  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.baseUrl, payment);
  }

  updatePayment(id: number, payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${this.baseUrl}/${id}`, payment);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPaymentsList(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`http://localhost:8081/spring-test/payments/student-name?name=john`);
  }

  getPaymentsListByName(name:string): Observable<Payment[]> {
    return this.http.get<Payment[]>(  `${this.baseUrl}?name=${name}`);
  }
}
