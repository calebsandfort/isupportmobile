//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class CustomerSalesNotes extends EntityBase {
  createdDate: string;
  entry: string;
  customerGuid: string;
  opportunityGuid: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiCustomerSalesNotes:CustomerSalesNotesType): CustomerSalesNotes {
    let customerSalesNotes = new CustomerSalesNotes();
    customerSalesNotes.id = apiCustomerSalesNotes.id;
    customerSalesNotes.createdDate = apiCustomerSalesNotes.createdDate;
    customerSalesNotes.entry = apiCustomerSalesNotes.entry;
    customerSalesNotes.customerGuid = apiCustomerSalesNotes.customerGuid;
    customerSalesNotes.opportunityGuid = apiCustomerSalesNotes.opportunityGuid;
    if (apiCustomerSalesNotes.owner) customerSalesNotes.owner = SupportRepresentative.fromApiEntity(apiCustomerSalesNotes.owner);

    return customerSalesNotes;
  }
}

export default CustomerSalesNotes;

export type CustomerSalesNotesType = {
  id: number,
  createdDate: string;
  entry: string;
  customerGuid: string;
  opportunityGuid: string;
  owner: SupportRepresentative;
}

