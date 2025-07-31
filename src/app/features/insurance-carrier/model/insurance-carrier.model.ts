import { Insurance } from '../../insurance/model/insurance.model';
import { DialupSettings } from '../../dialup-settings/model/dialup-settings.model';

export interface InsuranceCarrier {
  id?: string;
  insuranceID: string;
  insurance?: Insurance;
  dialupSettingID: string;
  dialupSetting?: DialupSettings;
  displayName: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  zipCode: string;
  phone: string;
  fax: string;
  email: string;
  url: string;
  acceptSecondaryClaim: boolean;
  acceptCorrectedClaim: boolean;
  claimFilingLimit: number;
  appealFilingLimit: number;
  isActive: boolean;
  isDeleted: boolean;
} 