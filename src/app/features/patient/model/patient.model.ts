import { Subscriber } from '../../subscriber/model/subscriber.model';

export interface Patient {
  id?: string;
  subscriberID: string;
  subscriber?: Subscriber;
  firstName: string;
  lastName: string;
  middleName: string;
  primaryIdentification: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  secondaryIdentification: string;
  relationshipCode: string;
  gender: string;
  dob: Date;
} 