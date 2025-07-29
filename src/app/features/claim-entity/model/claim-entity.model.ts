import { Claim } from "../../claim/model/claim.model";

export interface ClaimEntity {
  id?: string;
  claimID: string;
  claim?: Claim;
  entityCode: string;
  entityTypeQualifier: string;
  firstName: string;
  lastName: string;
  middleName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  primaryIdentification: string;
  secondaryIdentification: string;
  taxonomyCode: string;
} 