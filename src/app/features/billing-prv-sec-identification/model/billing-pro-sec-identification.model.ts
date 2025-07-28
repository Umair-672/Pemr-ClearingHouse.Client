import { BillingProvider } from "../../billing-provider/model/billingProvider-model";

export interface BillingPrvSecondaryIdentification {
  id?: string;
  billingProviderID: string;
  billingProvider?: BillingProvider;
  qualifier: string;
  value: string;
}
