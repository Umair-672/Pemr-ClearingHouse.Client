import { Gateway } from '../../gateway/model/gateway.model';

export interface FTPSettings {
  id?: string;
  gatewayID: string;
  gateway?: Gateway;
  submitterID: string;
  url: string;
  userName: string;
  password: string;
  claimDir: string;
  claimStatusDir: string;
  eligibilityDir: string;
  eraDir: string;
  outboundFileType: string;
  inboundFileType: string;
  encryptionPublicKey: string;
  encryptionPrivateKey: string;
  isActive: boolean;
  isDeleted: boolean;
} 