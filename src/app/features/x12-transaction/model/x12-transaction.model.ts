import { X12Standard } from '../../x12-standard/model/x12-standard.model';

export interface X12Transaction {
  id?: string;
  x12StandardID: string;
  x12Standard?: X12Standard;
  transaction: string;
  transactionCode: string;
} 