export interface IOrganization {
  id?: string;
  name: string;
  address?: string;
  email: string;
  phone?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}
