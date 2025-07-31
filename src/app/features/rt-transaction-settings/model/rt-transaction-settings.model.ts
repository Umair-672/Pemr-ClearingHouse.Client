import { TransactionRoute } from '../../transaction-route/model/transaction-route.model';

export interface RTTransactionSettings {
  id?: string;
  transactionRouteID: string;
  transactionRoute?: TransactionRoute;
  uri: string;
  userName: string;
  password: string;
} 