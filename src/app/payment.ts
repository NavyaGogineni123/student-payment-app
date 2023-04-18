export class Payment {
  paymentId: number;
  studentId: number;
  cardNumber: string;
  expiryDate:Date;
  cvv:string;
  cardholderName: string;
  billingAddress: string;
  paymentAmount: number;
  paymentDate: string = '';

  // Consider adding a constructor to initialize properties more easily
  constructor(paymentId: number, studentId: number, cardNumber: string, expiryDate:Date, cvv:string, cardholderName: string, billingAddress: string, paymentAmount: number, paymentDate?: string) {
    this.paymentId = paymentId;
    this.studentId = studentId;
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv =cvv;
    this.cardholderName = cardholderName;
    this.billingAddress = billingAddress;
    this.paymentAmount = paymentAmount;
    this.paymentDate = paymentDate || '';
  }
}
