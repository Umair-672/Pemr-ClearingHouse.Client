export interface InboundClaimFile {
  id?: string;
  name: string;
  receivedDate: Date;
  submitterID: string;
  receiverID: string;
  siteID: string;
  interchangeCtrlNo: string;
  noOfClaims: number;
}
