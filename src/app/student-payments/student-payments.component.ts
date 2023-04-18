import { Component, OnInit } from '@angular/core'; // Import OnInit
import { StudentPaymentsService } from '../student-payments.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-student-payments',
  templateUrl: './student-payments.component.html',
  styleUrls: ['./student-payments.component.css']
})
export class StudentPaymentsComponent implements OnInit { // Implement OnInit
  paymentList: Payment[] = []; // Initialize the paymentList as an empty array

  constructor(private paymentService: StudentPaymentsService) {}

  searchText: string = '';
  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(): void {
    console.log('inside data');
    this.paymentService.getPaymentsList().subscribe((data) => {
      this.paymentList = data;
    });
  }

  createPayment(): void {
    // Implement createPayment logic
  }

  editPayment(payment: Payment): void { // Use the Payment type instead of any
    // Implement editPayment logic
  }

  deletePayment(payment: Payment): void { // Use the Payment type instead of any
    // Implement deletePayment logic
  }

  searchPaymentByLastName() {
    this.paymentService.getPaymentsListByName(this.searchText).subscribe((data) => {
      this.paymentList = data;
    });
  }
}
