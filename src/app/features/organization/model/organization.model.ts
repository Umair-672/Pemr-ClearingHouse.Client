import { Organization } from './../organization';
export interface IOrganization {
  id?: string;
  organizationName: string;
  address?: string;
  email: string;
  phone?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}
