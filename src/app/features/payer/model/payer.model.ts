import { Subscriber } from "../../subscriber/model/subscriber.model";

export interface Payer {
  id?: string; // MongoDB _id, optional for new records
  subscriberID: string;
  name: string;
  identificationCode: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  subscriber?: Subscriber;
}
