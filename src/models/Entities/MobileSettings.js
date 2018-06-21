//@flow
import EntityBase from './entityBase';

export class MobileSettings extends EntityBase {
  displayAvatars: string;
  checkInOnLogin: string;
  assetSummaryLayout: string;
  assetDetailLayout: string;
  customerSummaryLayout: string;
  customerDetailLayout: string;
  companySummaryLayout: string;
  companyDetailLayout: string;
  supportRepresentativeSummaryLayout: string;
  supportRepresentativeDetailLayout: string;
  incidentSummaryLayout: string;
  incidentDetailLayout: string;
  problemSummaryLayout: string;
  problemDetailLayout: string;
  changeSummaryLayout: string;
  changeDetailLayout: string;
  kBaseSummaryLayout: string;
  kBaseDetailLayout: string;
  modifiedDate: string;

  static fromApiEntity(apiMobileSettings:MobileSettingsType): MobileSettings {
    let mobileSettings = new MobileSettings();
    mobileSettings.id = apiMobileSettings.id;
    mobileSettings.displayAvatars = apiMobileSettings.displayAvatars;
    mobileSettings.checkInOnLogin = apiMobileSettings.checkInOnLogin;
    mobileSettings.assetSummaryLayout = apiMobileSettings.assetSummaryLayout;
    mobileSettings.assetDetailLayout = apiMobileSettings.assetDetailLayout;
    mobileSettings.customerSummaryLayout = apiMobileSettings.customerSummaryLayout;
    mobileSettings.customerDetailLayout = apiMobileSettings.customerDetailLayout;
    mobileSettings.companySummaryLayout = apiMobileSettings.companySummaryLayout;
    mobileSettings.companyDetailLayout = apiMobileSettings.companyDetailLayout;
    mobileSettings.supportRepresentativeSummaryLayout = apiMobileSettings.supportRepresentativeSummaryLayout;
    mobileSettings.supportRepresentativeDetailLayout = apiMobileSettings.supportRepresentativeDetailLayout;
    mobileSettings.incidentSummaryLayout = apiMobileSettings.incidentSummaryLayout;
    mobileSettings.incidentDetailLayout = apiMobileSettings.incidentDetailLayout;
    mobileSettings.problemSummaryLayout = apiMobileSettings.problemSummaryLayout;
    mobileSettings.problemDetailLayout = apiMobileSettings.problemDetailLayout;
    mobileSettings.changeSummaryLayout = apiMobileSettings.changeSummaryLayout;
    mobileSettings.changeDetailLayout = apiMobileSettings.changeDetailLayout;
    mobileSettings.kBaseSummaryLayout = apiMobileSettings.kBaseSummaryLayout;
    mobileSettings.kBaseDetailLayout = apiMobileSettings.kBaseDetailLayout;
    mobileSettings.modifiedDate = apiMobileSettings.modifiedDate;

    return mobileSettings;
  }
}

export default MobileSettings;

export type MobileSettingsType = {
  id: number,
  displayAvatars: string;
  checkInOnLogin: string;
  assetSummaryLayout: string;
  assetDetailLayout: string;
  customerSummaryLayout: string;
  customerDetailLayout: string;
  companySummaryLayout: string;
  companyDetailLayout: string;
  supportRepresentativeSummaryLayout: string;
  supportRepresentativeDetailLayout: string;
  incidentSummaryLayout: string;
  incidentDetailLayout: string;
  problemSummaryLayout: string;
  problemDetailLayout: string;
  changeSummaryLayout: string;
  changeDetailLayout: string;
  kBaseSummaryLayout: string;
  kBaseDetailLayout: string;
  modifiedDate: string;
}

