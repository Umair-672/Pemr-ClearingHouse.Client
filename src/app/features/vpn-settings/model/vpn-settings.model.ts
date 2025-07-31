import { Gateway } from '../../gateway/model/gateway.model';

export interface VPNSettings {
  id?: string;
  gatewayID: string;
  gateway?: Gateway;
  connectionName: string;
  ipAddress: string;
  userName: string;
  password: string;
  isActive: boolean;
  isDeleted: boolean;
} 