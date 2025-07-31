import { InsuranceCarrier } from '../../insurance-carrier/model/insurance-carrier.model';
import { X12Transaction } from '../../x12-transaction/model/x12-transaction.model';
import { Gateway } from '../../gateway/model/gateway.model';

export interface TransactionRoute {
  id?: string;
  insuranceCarrierID: string;
  insuranceCarrier?: InsuranceCarrier;
  x12TransactionID: string;
  x12Transaction?: X12Transaction;
  gatewayID: string;
  gateway?: Gateway;
  authInfo: string;
  securityInfo: string;
  submitterQualifier: string;
  submitterID: string;
  receiverQualifier: string;
  receiverID: string;
  senderCode: string;
  receiverCode: string;
  receiverName: string;
  receiverPrimaryIdentifier: string;
  outboundPayerID: string;
  inboundPayerID: string;
  connectionMode: string;
  isPreferred: boolean;
} 