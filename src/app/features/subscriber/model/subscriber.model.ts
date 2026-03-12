import { BillingProvider } from "../../billing-provider/model/billingProvider-model";

export interface Subscriber {
  id?: string;
  billingProviderID: string;
  billingProvider?: BillingProvider;
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
  payerResponsibility: string;
  relationshipCode: string;
  insuranceTypeCode: string;
  claimFilingIndicator: string;
  gender: string;
  dob: Date;
}
