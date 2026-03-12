import { Subscriber } from "../../subscriber/model/subscriber.model";

export interface Claim {
  id?: string;
  subscriberID: string;
  subscriber?: Subscriber;
  patientControlNumber: string;
  chargeAmount: number;
  placeOfService: string;
  dateOfService: Date;
  referralNo: string;
  priorAuthorization: string;
  payerControlNumber: string;
} 