import { Injectable } from '@angular/core';

import { Model } from './../model/PdfForm';

@Injectable()
export class PdfService {

  constructor() { }

  loadPdf(): Model.Document {
    const newDocument = new Model.Document();

    newDocument.url = "/assets/247OR.pdf";

    newDocument.form.shown = true;
    newDocument.form.pages = [];
    newDocument.form.pageSize = new Model.Size();
    newDocument.form.pageSize.width = 8500;
    newDocument.form.pageSize.height = 11000;

    newDocument.form.data = new Model.FormData();
    newDocument.form.data.fields = [];

    let dataField = new Model.FieldData();
    dataField.name = "Component1PartNameVIN";
    dataField.label = "Enter the first part name and vehicle identification number of the vehicle component part.";
    dataField.description = "This field shows the first part name and vehicle identification number of the vehicle component part.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);

    dataField = new Model.FieldData();
    dataField.name = "Component2PartNameVIN";
    dataField.label = "Enter the second part name and vehicle identification number of the vehicle component part.";
    dataField.description = "This field shows the second part name and vehicle identification number of the vehicle component part.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Component3PartNameVIN";
    dataField.label = "Enter the third part name and vehicle identification number of the vehicle component part.";
    dataField.description = "This field shows the third part name and vehicle identification number of the vehicle component part.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);

    dataField = new Model.FieldData();
    dataField.name = "EquipmentNumber";
    dataField.label = "Enter the equipment number.";
    dataField.description = "This field shows the equipment number.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FleetAccountNumber";
    dataField.label = "Enter the fleet account number.";
    dataField.description = "This field shows the fleet account number.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypeDiesel";
    dataField.label = "Check this box to indicate that the fuel type is diesel.";
    dataField.description = "This field shows that the fuel type is diesel.  Indicate this by marking the field with an 'X";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypeElectric";
    dataField.label = "Check this box to indicate that the fuel (power) type is electric.";
    dataField.description = "This field shows that the fuel (power) type is electric.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypeGas";
    dataField.label = "Check this box to indicate that the fuel type is gasoline.";
    dataField.description = "This field shows that that the fuel type is gasoline.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypeHybrid";
    dataField.label = "Check this box to indicate that the vehicle fuel type is hybrid.";
    dataField.description = "This field shows that the vehicle fuel type is hybrid.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;

    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypeNaturalGas";
    dataField.label = "Check this box to indicate that the fuel type is natural gas.";
    dataField.description = "This field shows that the fuel type is natural gas.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypeOther";
    dataField.label = "Check this box to indicate that the fuel type is a type other than the choices listed on the form.";
    dataField.description = "This field shows that the fuel type is a type other than the choices listed on the form.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypeOtherDescription";
    dataField.label = "Enter a description of the fuel type.";
    dataField.description = "This field shows a description of the fuel type.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypePlugInHybrid";
    dataField.label = "Check this box to indicate that the vehicle fuel type is plug-in hybrid.";
    dataField.description = "This field shows that the vehicle fuel type is plug-in hybrid.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "FuelTypePropane";
    dataField.label = "Check this box to indicate that the vehicle uses propane.";
    dataField.description = "This field shows that the vehicle uses propane.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "IdentificationNumber1";
    dataField.label = "Enter the driver's license number, social security number, customer / account number or other applicable identification number of the first owner.";
    dataField.description = "This field shows the driver's license number, social security number, customer / account number or other applicable identification number of the first owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "IdentificationNumber2";
    dataField.label = "Enter the driver's license number, social security number, customer / account number or other applicable identification number of the second owner.";
    dataField.description = "This field shows the driver's license number, social security number, customer / account number or other applicable identification number of the second owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "IdentificationNumber3";
    dataField.label = "Enter the driver's license number, social security number, customer / account number or other applicable identification number of the third owner.";
    dataField.description = "This field shows the driver's license number, social security number, customer / account number or other applicable identification number of the third owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "InsurancePolicyNumber";
    dataField.label = "Enter the insurance policy number.";
    dataField.description = "This field shows the vehicle's / vessel's insurance policy number.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "JointOwnershipSurvivorshipNo";
    dataField.label = "Check this box to indicate that the joint owners/lessees will agree that the title will not show joint ownership with right of survivorship.";
    dataField.description = "This field shows that the joint owners/lessees agree that the title will not show joint ownership with right of survivorship.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "JointOwnershipSurvivorshipYes";
    dataField.label = "Check this box to indicate that the joint owners/lessees agree that the title will show joint ownership with right of survivorship.";
    dataField.description = "This field shows that the joint owners/lessees agree that the title will show joint ownership with right of survivorship.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "JointSecurityInterestSurvivorshipNo";
    dataField.label = "Check this box to indicate that the joint owners/lessees will agree that the title will not show joint security interest with right of survivorship.";
    dataField.description = "This field shows that the joint owners/lessees will agree that the title will not show joint security interest with right of survivorship.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "JointSecurityInterestSurvivorshipYes";
    dataField.label = "Check this box to indicate that the joint security interest holders will agree that the title will show joint security interest with right of survivorship.";
    dataField.description = "This field shows that the joint owners/lessees will agree that the title will show joint security interest holders with right of survivorship.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lessee";
    dataField.label = "Check this box to indicate that the party is a lessee.";
    dataField.description = "This field shows that the party is a lessee.  Indicate this by marking the box with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorIdentificationNumber";
    dataField.label = "Enter the driver's license number, identification number or customer number of the lessor.";
    dataField.description = "This field shows the driver's license number, identification number or customer number of the lessor.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorPhoneNumber";
    dataField.label = "Enter the telephone number of the lessor.";
    dataField.description = "This field shows the area code and telephone number of the lessor.";
    dataField.format = Model.Format.PhoneNumber;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LicensePlateNumber";
    dataField.label = "Enter the license plate number or tab number.";
    dataField.description = "This field shows the license plate number or tab number.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder1IdentificationNumber";
    dataField.label = "Enter the identification number of the first lienholder.";
    dataField.description = "This field shows the identification number of the first lienholder.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder1PhoneNumber";
    dataField.label = "Enter the telephone number of the first lienholder.";
    dataField.description = "This field shows the area code and telephone number of the first lienholder.";
    dataField.format = Model.Format.PhoneNumber;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder2IdentificationNumber";
    dataField.label = "Enter the identification number of the second lienholder.";
    dataField.description = "This field shows the identification number of the second lienholder.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder2PhoneNumber";
    dataField.label = "Enter the telephone number of the second lienholder.";
    dataField.description = "This field shows the area code and telephone number of the second lienholder.";
    dataField.format = Model.Format.PhoneNumber;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OdometerReading";
    dataField.label = "Enter the odometer reading.";
    dataField.description = "This field shows the odometer reading.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OdometerReadingExceeds";
    dataField.label = "Check this box to indicate that the odometer reading reflects the amount of mileage in excess of its mechanical limits.";
    dataField.description = "This field shows that the odometer reading reflects the amount of mileage in excess of its mechanical limits.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OdometerReadingNotActual";
    dataField.label = "Check this box to indicate that the odometer reading is not the actual mileage.";
    dataField.description = "This field shows that the odometer reading is not the actual mileage.  Indicate this by checking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner";
    dataField.label = "Check this box to indicate that the party is the owner.";
    dataField.description = "This field shows that the party is the owner.  Indicate this by marking the box with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1PhoneNumber";
    dataField.label = "Enter the telephone number of the first owner.";
    dataField.description = "This field shows the area code and telephone number of the first owner.";
    dataField.format = Model.Format.PhoneNumber;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner2PhoneNumber";
    dataField.label = "Enter the telephone number of the second owner.";
    dataField.description = "This field shows the area code and telephone number of the second owner.";
    dataField.format = Model.Format.PhoneNumber;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Remarks1";
    dataField.label = "Enter any additional remarks in this area - line 1.";
    dataField.description = "This field shows any additional remarks pertaining to the titling document - line 1.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Remarks2";
    dataField.label = "Enter any additional remarks in this area - line 2.";
    dataField.description = "This field shows any additional remarks pertaining to the titling document - line 2.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Remarks3";
    dataField.label = "Enter any additional remarks in this area - line 3.";
    dataField.description = "This field shows any additional remarks pertaining to the titling document - line 3.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Remarks4";
    dataField.label = "Enter any additional remarks in this area - line 4.";
    dataField.description = "This field shows any additional remarks pertaining to the titling document - line 4.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "TitleNumber";
    dataField.label = "Enter the number on the certificate of title/electronic title for the vehicle/vessel/mobile unit.";
    dataField.description = "This field shows the number on the certificate of title/electronic title for the vehicle/vessel/mobile unit.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "TrailerLessThan8000LBS";
    dataField.label = "Check this box to indicate that the weight of the trailer is less than 8000 pounds.";
    dataField.description = "This field shows that the weight of the trailer is less than 8000 pounds.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "TrailerOver8000LBS";
    dataField.label = "Check this box to indicate that the weight of the trailer  is over 8000 pounds.";
    dataField.description = "This field shows that the weight of the trailer is over 8000 pounds.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleAssembled";
    dataField.label = "Check this box to indicate that the vehicle is assembled and does not resemble any particular year model/make of the vehicle.";
    dataField.description = "This field shows that the vehicle is assembled and does not resemble any particular year model/make of the vehicle.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleFarmIDNumber";
    dataField.label = "Enter the vehicle's farm identification number.";
    dataField.description = "This field shows the vehicle's farm identification number.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleGreaterThan26KNo";
    dataField.label = "Check this box to indicate that the gross vehicle weight is less than 26,000 pounds.";
    dataField.description = "This field shows that the gross vehicle weight is less than 26,000 pounds.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleGreaterThan26KYes";
    dataField.label = "Check this box to indicate that the gross vehicle weight is greater than 26,000 pounds.";
    dataField.description = "This field shows that the gross vehicle weight is greater than 26,000 pounds.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleIdentificationNumber";
    dataField.label = "Enter the vehicle identification number (VIN) of the first vehicle.";
    dataField.description = "This field shows the vehicle identification number (VIN) of the first vehicle.";
    dataField.format = Model.Format.AlphaNumeric;
    dataField.maxChar = 20;
      newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleMake";
    dataField.label = "Enter the make/manufacturer of the first vehicle.";
    dataField.description = "This field shows the make/manufacturer of the first vehicle.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleVesselBodyStyle";
    dataField.label = "Enter the body style of the vehicle or vessel.";
    dataField.description = "This field shows the body style of the vehicle or vessel, whichever is applicable.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleVesselReconstructedYes";
    dataField.label = "Check this box to indicate that the vehicle or vessell has been specially constructed/reconstruction.";
    dataField.description = "This field shows that the vehicle or vessel has been specially constructed/reconstruction.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleVesselReplica";
    dataField.label = "Check this field to indicate that the vehicle or vessel is a replica.";
    dataField.description = "This field shows that the vehicle or vessel is a replica.  Indicate this by marking the field with an 'X'.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleWeightLength";
    dataField.label = "Enter the weight and length of the vehicle or unit.";
    dataField.description = "This field shows the weight and length of the vehicle or unit.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorAddress";
    dataField.label = "Enter the address of the lessor.";
    dataField.description = "This field shows the street address, city, state and ZIP code of the lessor.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder1Address";
    dataField.label = "Enter the first lienholder's address.";
    dataField.description = "This field shows the street address, city, state and ZIP code of the first lienholder.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder2Address";
    dataField.label = "Enter the second lienholder's address.";
    dataField.description = "This field shows the street address, city, state and ZIP code of the second lienholder.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OneTimeCityStateZIP";
    dataField.label = "Enter the city, state and ZIP code that the owner/lessee would like the documents to be sent to.";
    dataField.description = "This field the city, state and ZIP code that the owner/lessee would like the documents to be sent to.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OneTimeMailingAddressBoth";
    dataField.label = "Check this box if the owner/lessee would like the documents to be sent to the both one time only street address.";
    dataField.description = "This field shows if the owner/lessee would like the documents to be sent to the both one time only street address.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OneTimeMailingAddressRegular";
    dataField.label = "Check this box if the owner/lessee would like the documents to be sent to the regular one time only street address.";
    dataField.description = "This field shows if the owner/lessee would like the documents to be sent to the regular one time only street address.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OneTimeMailingAddressTitle";
    dataField.label = "Check this box if the owner/lessee would like the documents to be sent to the title one time only street address.";
    dataField.description = "This field shows if the owner/lessee would like the documents to be sent to the title one time only street address.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OneTimeStreetAddress";
    dataField.label = "Enter the street address that the owner/lessee would like the documents to be sent to.";
    dataField.description = "This field shows the street address that the owner/lessee would like the documents to be sent to.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1CityStateZIP";
    dataField.label = "Enter the first owner's city, state and ZIP code.";
    dataField.description = "This field shows the first owner's city, state and ZIP code.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1County";
    dataField.label = "Enter the county where the first owner resides.";
    dataField.description = "This field shows the county where the first owner resides.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1MailingCityStateZIP";
    dataField.label = "Enter the mailing city, state and ZIP code of the first owner's address, if different than the residential city, state and ZIP code.";
    dataField.description = "This field shows the mailing city, state and ZIP code of the first owner's address, if different than the residential city, state and ZIP code.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1MailingStreetAddress";
    dataField.label = "Enter the mailing street address of the first owner if different from the residential street address.";
    dataField.description = "This field shows the mailing street address of the first owner if different than the residential street address.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1StreetAddress";
    dataField.label = "Enter the street address of the first owner.";
    dataField.description = "This field shows the street address of the first owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OwnerMailingCounty";
    dataField.label = "Enter the mailing county of the owner/lessee if different that the residential county.";
    dataField.description = "This field shows the mailing county of the owner/lessee if different that the residential county.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleCityStateZIP";
    dataField.label = "Enter the city, state and ZIP code where the vehicle will be stored or the actual location of the manufactured structure.";
    dataField.description = "This field shows the city, state and ZIP code where the vehicle will be stored or the actual location of the manufactured structure.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleCounty";
    dataField.label = "Enter the county of the where the vehicle is kept or the actual location of the manufactured structure.";
    dataField.description = "This field shows the county where the vehicle is kept or the actual location of the manufactured structure.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleStreetAddress";
    dataField.label = "Enter the street address where the vehicle is stored or the actual location of the manufactured structure.";
    dataField.description = "This field shows the street address where the vehicle is stored or the actual location of the manufactured structure.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorDateOfBirth";
    dataField.label = "Enter the date of birth for the lessor.";
    dataField.description = "This field shows the date of birth for the lessor.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorSignatureDate";
    dataField.label = "Enter the date that the authorized lessor representative is signing the document.";
    dataField.description = "This field shows the date that the authorized lessor representative is signing the document.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder1DateOfBirth";
    dataField.label = "Enter the date of birth for the first lienholder.";
    dataField.description = "This field shows the date of birth for the first lienholder.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder2DateOfBirth";
    dataField.label = "Enter the date of birth for the second lienholder.";
    dataField.description = "This field shows the date of birth for the second lienholder.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "OdometerReadingDate";
    dataField.label = "Enter the date that the odometer reading was recorded.";
    dataField.description = "This field shows the month, day and year that the odometer reading was recorded.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1DateOfBirth";
    dataField.label = "Enter the date of birth for the first owner.";
    dataField.description = "This field shows the date of birth for the first owner.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1SignatureDate";
    dataField.label = "Enter the date that the first owner is signing the document.";
    dataField.description = "This field shows the date that the first owner is signing the document.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner2DateOfBirth";
    dataField.label = "Enter the date of birth for the second owner.";
    dataField.description = "This field shows the date of birth for the second owner.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner3DateOfBirth";
    dataField.label = "Enter the date of birth for the third owner.";
    dataField.description = "This field shows the date of birth for the third owner.";
    dataField.format = Model.Format.Date;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VehicleYear";
    dataField.label = "Enter the year the vehicle was manufactured/model year.";
    dataField.description = "This field shows the year the vehicle was manufactured/model year.";
    dataField.format = Model.Format.Integer;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "SignatureLienholder1";
    dataField.label = "Used for Digital Signature.";
    dataField.description = "Used for Digital Signature.";
    dataField.format = Model.Format.Signature;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "SignatureOwner1";
    dataField.label = "Used for Digital Signature.";
    dataField.description = "Used for Digital Signature.";
    dataField.format = Model.Format.Signature;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "SignatureVeteranOwner";
    dataField.label = "Used for Digital Signature.";
    dataField.description = "Used for Digital Signature.";
    dataField.format = Model.Format.Signature;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1BusinessName";
    dataField.label = "Enter the business name of the first owner.";
    dataField.description = "This field shows the business name of the first owner.  (Note:  If applicable or desired, this field may also be used to display the full name of an individual.)";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner2BusinessName";
    dataField.label = "Enter the business name of the second additional owner.";
    dataField.description = "This field shows the business name of the second additional owner.  (Note:  If applicable or desired, this field may also be used to display the full name of an individual.)";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner3BusinessName";
    dataField.label = "Enter the business name of the third owner.";
    dataField.description = "This field shows the business name of the third owner.  (Note:  If applicable or desired, this field may also be used to display the full name of an individual.)";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort1FirstName";
    dataField.label = "Enter the first name of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the first name of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort1FullName";
    dataField.label = "Enter the full name of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the full name of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort1LastName";
    dataField.label = "Enter the last name of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the last name of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort1MiddleName";
    dataField.label = "Enter the middle name of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the middle name of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort1SuffixName";
    dataField.label = "Enter the suffix name, if applicable, of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the suffix name, (e.g., 'Jr.', 'III', 'M.D.', etc.), if applicable, of the first individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort2FirstName";
    dataField.label = "Enter the first name of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the first name of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort2FullName";
    dataField.label = "Enter the full name of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the full name of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort2LastName";
    dataField.label = "Enter the last name of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the last name of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort2MiddleName";
    dataField.label = "Enter the middle name of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the middle name of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Consort2SuffixName";
    dataField.label = "Enter the suffix name, if applicable, of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.description = "This field shows the suffix name, (e.g., 'Jr.', 'III', 'M.D.', etc.), if applicable, of the second individual who is the consort for the drug and alcohol testing certification.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "InsuranceCompanyName";
    dataField.label = "Enter the name of the insurance company.";
    dataField.description = "This field shows the name of the company that is insuring the vehicle/vessel.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorFirstName";
    dataField.label = "Enter the first name of the lessor, if lessor is an individual.";
    dataField.description = "This field shows the first name of the lessor, if lessor is an individual.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorLastName";
    dataField.label = "Enter the last name of the lessor, if lessor is an individual.";
    dataField.description = "This field shows the last name of the lessor, if lessor is an individual.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorMiddleName";
    dataField.label = "Enter the middle name of the lessor, if lessor is an individual.";
    dataField.description = "This field shows the middle name of the lessor, if lessor is an individual.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorName";
    dataField.label = "Enter the name of the lessor.";
    dataField.description = "This field shows the name of the lessor.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "LessorSuffixName";
    dataField.label = "Enter the suffix name of the lessor, if lessor is an individual.";
    dataField.description = "This field shows the suffix name, (e.g., 'Jr.', 'III', 'M.D.', etc.), of the lessor, if lessor is an individual.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder1Name";
    dataField.label = "Enter the name of the first lien holder.";
    dataField.description = "This field shows the name of the first lien holder.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Lienholder2Name";
    dataField.label = "Enter the name of the second lienholder.";
    dataField.description = "This field shows the name of the second lienholder.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1FirstName";
    dataField.label = "Enter the first name of the first owner.";
    dataField.description = "This field shows the first name of the first owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1LastName";
    dataField.label = "Enter the last name of the first owner.";
    dataField.description = "This field shows the last name of the first owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1MiddleName";
    dataField.label = "Enter the middle name of the first owner.";
    dataField.description = "This field shows the middle name of the first owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner1SuffixName";
    dataField.label = "Enter the suffix name, if applicable, for the first owner.";
    dataField.description = "This field shows the suffix name (e.g., 'Jr., ' 'III, ' 'M.D., ' etc.), if applicable, for the first owner.";
    dataField.format = Model.Format.AlphaNumeric;
    dataField.maxChar = 2;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner2FirstName";
    dataField.label = "Enter the first name of the second owner.";
    dataField.description = "This field shows the first name of the second owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner2LastName";
    dataField.label = "Enter the last name of the second owner.";
    dataField.description = "This field shows the last name of the second owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner2MiddleName";
    dataField.label = "Enter the middle name of the second owner.";
    dataField.description = "This field shows the middle name of the second owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner2SuffixName";
    dataField.label = "Enter the suffix name, if applicable, for the second owner.";
    dataField.description = "This field shows the suffix name, (e.g., 'Jr.', 'III', 'M.D.', etc.), if applicable, for the second owner.";
    dataField.format = Model.Format.AlphaNumeric;
    dataField.maxChar = 2;
      newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner3FirstName";
    dataField.label = "Enter the first name of the third owner.";
    dataField.description = "This field shows the first name of the third owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner3LastName";
    dataField.label = "Enter the last name of the third owner.";
    dataField.description = "This field shows the last name of the third owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner3MiddleName";
    dataField.label = "Enter the middle name of the third owner.";
    dataField.description = "This field shows the middle name of the third owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "Owner3SuffixName";
    dataField.label = "Enter the suffix name, if applicable, for the third owner.";
    dataField.description = "This field shows the suffix name, (e.g., 'Jr.', 'III', 'M.D.', etc.), if applicable, for the third owner.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "SchoolDistrictName";
    dataField.label = "Enter the school district name(s) where the school bus will run.";
    dataField.description = "This field shows the school district name(s) where the school bus will run.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VeteranOwnerFirstName";
    dataField.label = "Enter the first name of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.description = "This is the first name of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VeteranOwnerFullName";
    dataField.label = "Enter the full name of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.description = "This is the full name of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VeteranOwnerLastName";
    dataField.label = "Enter the last name of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.description = "This is the last name of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VeteranOwnerMiddleName";
    dataField.label = "Enter the middle name or middle initial of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.description = "This is the middle name or middle initial of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);
    dataField = new Model.FieldData();

    dataField.name = "VeteranOwnerSuffixName";
    dataField.label = "Enter the suffix name (e.g., II, Sr., etc.) of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.description = "This is the suffix name (e.g., II, Sr., etc.) of the veteran owner who is currently serving or has previously served in the United States military.";
    dataField.format = Model.Format.AlphaNumeric;
    newDocument.form.data.fields.push(dataField);

    // ---------------------------------------------------------------------------
    // First Page
    let page = new Model.Page();
    page.pageNo = 1;
    newDocument.form.pages.push(page);
    page.locations = [];

    // ---------------------------------------------------------------------------
    // Second Page
    page = new Model.Page();
    page.pageNo = 2;
    page.locations = [];
    newDocument.form.pages.push(page);

    // ---------------------------------------------------------------------------
    // Third Page
    page = new Model.Page();
    page.pageNo = 3;
    page.locations = [];
    newDocument.form.pages.push(page);

    // ---------------------------------------------------------------------------
    // Fourth Page
    page = new Model.Page();
    page.pageNo = 4;
    page.locations = [];
    newDocument.form.pages.push(page);

    // ---------------------------------------------------------------------------
    // Fith Page
    page = new Model.Page();
    page.pageNo = 5;
    page.locations = [];
    newDocument.form.pages.push(page);

    let location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 96;
    location.name = "SignatureOwner1";
    location.pdf.x = 937;
    location.pdf.y = 9908;
    location.pdf.height = 206;
    location.pdf.width = 2599;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 100;
    location.name = "SignatureLienholder1";
    location.pdf.x = 937;
    location.pdf.y = 10266;
    location.pdf.height = 191;
    location.pdf.width = 2599;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 69;
    location.name = "SignatureVeteranOwner";
    location.pdf.x = 5616;
    location.pdf.y = 6181;
    location.pdf.height = 191;
    location.pdf.width = 2513;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 0;
    location.name = "VehicleIdentificationNumber";
    location.pdf.x = 3554;
    location.pdf.y = 1759;
    location.pdf.height = 166;
    location.pdf.width = 2016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 6;
    location.name = "VehicleMake";
    location.pdf.x = 4434;
    location.pdf.y = 2029;
    location.pdf.height = 166;
    location.pdf.width = 516;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 5;
    location.name = "VehicleYear";
    location.pdf.x = 3734;
    location.pdf.y = 2029;
    location.pdf.height = 166;
    location.pdf.width = 433;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 77;
    location.name = "Lienholder1Address";
    location.pdf.x = 741;
    location.pdf.y = 7131;
    location.pdf.height = 166;
    location.pdf.width = 5931;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 82;
    location.name = "Lienholder2Address";
    location.pdf.x = 711;
    location.pdf.y = 7782;
    location.pdf.height = 166;
    location.pdf.width = 5931;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 74;
    location.name = "Lienholder1Name";
    location.pdf.x = 710;
    location.pdf.y = 6849;
    location.pdf.height = 166;
    location.pdf.width = 4616;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 79;
    location.name = "Lienholder2Name";
    location.pdf.x = 710;
    location.pdf.y = 7472;
    location.pdf.height = 166;
    location.pdf.width = 4616;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 98;
    location.name = "Owner2PhoneNumber";
    location.pdf.x = 6610;
    location.pdf.y = 9962;
    location.pdf.height = 166;
    location.pdf.width = 1285;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 17;
    location.name = "FuelTypeNaturalGas";
    location.pdf.x = 4788;
    location.pdf.y = 2367;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 12;
    location.name = "FuelTypePlugInHybrid";
    location.pdf.x = 5412;
    location.pdf.y = 2213;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 1;
    location.name = "TitleNumber";
    location.pdf.x = 6439;
    location.pdf.y = 1759;
    location.pdf.height = 166;
    location.pdf.width = 933;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 4;
    location.name = "LicensePlateNumber";
    location.pdf.x = 711;
    location.pdf.y = 2029;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 7;
    location.name = "VehicleVesselBodyStyle";
    location.pdf.x = 5091;
    location.pdf.y = 2029;
    location.pdf.height = 166;
    location.pdf.width = 199;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 8;
    location.name = "VehicleWeightLength";
    location.pdf.x = 5385;
    location.pdf.y = 2029;
    location.pdf.height = 166;
    location.pdf.width = 933;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 2;
    location.name = "VehicleGreaterThan26KYes";
    location.pdf.x = 7013;
    location.pdf.y = 1916;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 3;
    location.name = "VehicleGreaterThan26KNo";
    location.pdf.x = 7013;
    location.pdf.y = 2055;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 19;
    location.name = "VehicleFarmIDNumber";
    location.pdf.x = 711;
    location.pdf.y = 2357;
    location.pdf.height = 166;
    location.pdf.width = 1200;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 20;
    location.name = "FleetAccountNumber";
    location.pdf.x = 1964;
    location.pdf.y = 2357;
    location.pdf.height = 166;
    location.pdf.width = 864;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 21;
    location.name = "EquipmentNumber";
    location.pdf.x = 2984;
    location.pdf.y = 2357;
    location.pdf.height = 166;
    location.pdf.width = 700;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 9;
    location.name = "FuelTypeGas";
    location.pdf.x = 3742;
    location.pdf.y = 2213;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 15;
    location.name = "FuelTypeElectric";
    location.pdf.x = 3742;
    location.pdf.y = 2367;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 10;
    location.name = "FuelTypeDiesel";
    location.pdf.x = 4279;
    location.pdf.y = 2213;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 16;
    location.name = "FuelTypePropane";
    location.pdf.x = 4279;
    location.pdf.y = 2367;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 11;
    location.name = "FuelTypeHybrid";
    location.pdf.x = 4788;
    location.pdf.y = 2213;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 50;
    location.name = "Owner3LastName";
    location.pdf.x = 723;
    location.pdf.y = 5255;
    location.pdf.height = 166;
    location.pdf.width = 1360;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 53;
    location.name = "Owner3MiddleName";
    location.pdf.x = 3542;
    location.pdf.y = 5255;
    location.pdf.height = 166;
    location.pdf.width = 99;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 51;
    location.name = "Owner3SuffixName";
    location.pdf.x = 2119;
    location.pdf.y = 5255;
    location.pdf.height = 166;
    location.pdf.width = 265;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 64;
    location.name = "VeteranOwnerFirstName";
    location.pdf.x = 3597;
    location.pdf.y = 6015;
    location.pdf.height = 166;
    location.pdf.width = 1265;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 68;
    location.name = "VeteranOwnerFullName";
    location.pdf.x = 3618;
    location.pdf.y = 6025;
    location.pdf.height = 166;
    location.pdf.width = 3120;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 66;
    location.name = "VeteranOwnerLastName";
    location.pdf.x = 5039;
    location.pdf.y = 6015;
    location.pdf.height = 166;
    location.pdf.width = 1541;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 65;
    location.name = "VeteranOwnerMiddleName";
    location.pdf.x = 4851;
    location.pdf.y = 6015;
    location.pdf.height = 166;
    location.pdf.width = 181;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 67;
    location.name = "VeteranOwnerSuffixName";
    location.pdf.x = 6602;
    location.pdf.y = 6015;
    location.pdf.height = 166;
    location.pdf.width = 182;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 18;
    location.name = "FuelTypeOther";
    location.pdf.x = 5412;
    location.pdf.y = 2367;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 22;
    location.name = "FuelTypeOtherDescription";
    location.pdf.x = 5826;
    location.pdf.y = 2357;
    location.pdf.height = 166;
    location.pdf.width = 515;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 24;
    location.name = "OdometerReading";
    location.pdf.x = 853;
    location.pdf.y = 3282;
    location.pdf.height = 166;
    location.pdf.width = 933;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 25;
    location.name = "OdometerReadingDate";
    location.pdf.x = 2993;
    location.pdf.y = 3282;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 23;
    location.name = "OdometerReadingExceeds";
    location.pdf.x = 4405;
    location.pdf.y = 3178;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 26;
    location.name = "OdometerReadingNotActual";
    location.pdf.x = 4405;
    location.pdf.y = 3327;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 29;
    location.name = "Owner1BusinessName";
    location.pdf.x = 711;
    location.pdf.y = 4003;
    location.pdf.height = 166;
    location.pdf.width = 4600;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 27;
    location.name = "Owner";
    location.pdf.x = 3489;
    location.pdf.y = 3908;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 28;
    location.name = "Lessee";
    location.pdf.x = 4504;
    location.pdf.y = 3908;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 34;
    location.name = "IdentificationNumber1";
    location.pdf.x = 5441;
    location.pdf.y = 4024;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 35;
    location.name = "Owner1DateOfBirth";
    location.pdf.x = 6846;
    location.pdf.y = 4024;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 36;
    location.name = "Owner1StreetAddress";
    location.pdf.x = 712;
    location.pdf.y = 4344;
    location.pdf.height = 166;
    location.pdf.width = 3680;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 37;
    location.name = "Owner1MailingStreetAddress";
    location.pdf.x = 4480;
    location.pdf.y = 4344;
    location.pdf.height = 166;
    location.pdf.width = 3516;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 38;
    location.name = "Owner1CityStateZIP";
    location.pdf.x = 712;
    location.pdf.y = 4664;
    location.pdf.height = 166;
    location.pdf.width = 2374;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 39;
    location.name = "Owner1County";
    location.pdf.x = 3144;
    location.pdf.y = 4664;
    location.pdf.height = 166;
    location.pdf.width = 1200;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 40;
    location.name = "Owner1MailingCityStateZIP";
    location.pdf.x = 4479;
    location.pdf.y = 4664;
    location.pdf.height = 166;
    location.pdf.width = 2199;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 41;
    location.name = "OwnerMailingCounty";
    location.pdf.x = 6777;
    location.pdf.y = 4664;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 42;
    location.name = "Owner2BusinessName";
    location.pdf.x = 711;
    location.pdf.y = 4936;
    location.pdf.height = 166;
    location.pdf.width = 4600;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 47;
    location.name = "IdentificationNumber2";
    location.pdf.x = 5453;
    location.pdf.y = 4952;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 48;
    location.name = "Owner2DateOfBirth";
    location.pdf.x = 6854;
    location.pdf.y = 4952;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 49;
    location.name = "Owner3BusinessName";
    location.pdf.x = 711;
    location.pdf.y = 5249;
    location.pdf.height = 166;
    location.pdf.width = 4600;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 54;
    location.name = "IdentificationNumber3";
    location.pdf.x = 5452;
    location.pdf.y = 5265;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 55;
    location.name = "Owner3DateOfBirth";
    location.pdf.x = 6853;
    location.pdf.y = 5265;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 58;
    location.name = "OneTimeStreetAddress";
    location.pdf.x = 711;
    location.pdf.y = 5567;
    location.pdf.height = 166;
    location.pdf.width = 3516;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 61;
    location.name = "OneTimeCityStateZIP";
    location.pdf.x = 711;
    location.pdf.y = 5852;
    location.pdf.height = 166;
    location.pdf.width = 3681;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 59;
    location.name = "VehicleStreetAddress";
    location.pdf.x = 4865;
    location.pdf.y = 5567;
    location.pdf.height = 166;
    location.pdf.width = 3199;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 62;
    location.name = "VehicleCityStateZIP";
    location.pdf.x = 4480;
    location.pdf.y = 5852;
    location.pdf.height = 166;
    location.pdf.width = 2199;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 63;
    location.name = "VehicleCounty";
    location.pdf.x = 6777;
    location.pdf.y = 5852;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 70;
    location.name = "JointOwnershipSurvivorshipYes";
    location.pdf.x = 6831;
    location.pdf.y = 6447;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 71;
    location.name = "JointOwnershipSurvivorshipNo";
    location.pdf.x = 7373;
    location.pdf.y = 6447;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 72;
    location.name = "JointSecurityInterestSurvivorshipYes";
    location.pdf.x = 6831;
    location.pdf.y = 6590;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 73;
    location.name = "JointSecurityInterestSurvivorshipNo";
    location.pdf.x = 7373;
    location.pdf.y = 6590;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 75;
    location.name = "Lienholder1IdentificationNumber";
    location.pdf.x = 5413;
    location.pdf.y = 6849;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 76;
    location.name = "Lienholder1DateOfBirth";
    location.pdf.x = 6814;
    location.pdf.y = 6849;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 78;
    location.name = "Lienholder1PhoneNumber";
    location.pdf.x = 6814;
    location.pdf.y = 7155;
    location.pdf.height = 166;
    location.pdf.width = 1285;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 80;
    location.name = "Lienholder2IdentificationNumber";
    location.pdf.x = 5413;
    location.pdf.y = 7472;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 81;
    location.name = "Lienholder2DateOfBirth";
    location.pdf.x = 6814;
    location.pdf.y = 7472;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 83;
    location.name = "Lienholder2PhoneNumber";
    location.pdf.x = 6814;
    location.pdf.y = 7782;
    location.pdf.height = 166;
    location.pdf.width = 1285;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 84;
    location.name = "LessorName";
    location.pdf.x = 733;
    location.pdf.y = 8073;
    location.pdf.height = 166;
    location.pdf.width = 3516;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 89;
    location.name = "LessorIdentificationNumber";
    location.pdf.x = 5415;
    location.pdf.y = 8097;
    location.pdf.height = 166;
    location.pdf.width = 1349;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 90;
    location.name = "LessorDateOfBirth";
    location.pdf.x = 6814;
    location.pdf.y = 8097;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 91;
    location.name = "LessorAddress";
    location.pdf.x = 711;
    location.pdf.y = 8369;
    location.pdf.height = 166;
    location.pdf.width = 6015;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 92;
    location.name = "LessorPhoneNumber";
    location.pdf.x = 6814;
    location.pdf.y = 8390;
    location.pdf.height = 166;
    location.pdf.width = 1285;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 93;
    location.name = "InsuranceCompanyName";
    location.pdf.x = 925;
    location.pdf.y = 9195;
    location.pdf.height = 166;
    location.pdf.width = 4683;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 94;
    location.name = "InsurancePolicyNumber";
    location.pdf.x = 5767;
    location.pdf.y = 9195;
    location.pdf.height = 166;
    location.pdf.width = 1873;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 97;
    location.name = "Owner1SignatureDate";
    location.pdf.x = 4555;
    location.pdf.y = 9962;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 95;
    location.name = "Owner1PhoneNumber";
    location.pdf.x = 6610;
    location.pdf.y = 9784;
    location.pdf.height = 166;
    location.pdf.width = 1285;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 85;
    location.name = "LessorLastName";
    location.pdf.x = 743;
    location.pdf.y = 8083;
    location.pdf.height = 166;
    location.pdf.width = 1360;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 86;
    location.name = "LessorSuffixName";
    location.pdf.x = 2130;
    location.pdf.y = 8083;
    location.pdf.height = 166;
    location.pdf.width = 265;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 87;
    location.name = "LessorFirstName";
    location.pdf.x = 2412;
    location.pdf.y = 8083;
    location.pdf.height = 166;
    location.pdf.width = 1099;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 88;
    location.name = "LessorMiddleName";
    location.pdf.x = 3542;
    location.pdf.y = 8083;
    location.pdf.height = 166;
    location.pdf.width = 99;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 99;
    location.name = "LessorSignatureDate";
    location.pdf.x = 4555;
    location.pdf.y = 10289;
    location.pdf.height = 166;
    location.pdf.width = 1016;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 56;
    location.name = "OneTimeMailingAddressRegular";
    location.pdf.x = 4305;
    location.pdf.y = 5416;
    location.pdf.height = 148;
    location.pdf.width = 97;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 57;
    location.name = "OneTimeMailingAddressTitle";
    location.pdf.x = 4305;
    location.pdf.y = 5519;
    location.pdf.height = 148;
    location.pdf.width = 97;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 60;
    location.name = "OneTimeMailingAddressBoth";
    location.pdf.x = 4305;
    location.pdf.y = 5619;
    location.pdf.height = 148;
    location.pdf.width = 97;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 13;
    location.name = "TrailerOver8000LBS";
    location.pdf.x = 7013;
    location.pdf.y = 2217;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 14;
    location.name = "TrailerLessThan8000LBS";
    location.pdf.x = 7013;
    location.pdf.y = 2359;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 31;
    location.name = "Owner1FirstName";
    location.pdf.x = 2407;
    location.pdf.y = 4016;
    location.pdf.height = 166;
    location.pdf.width = 1099;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 30;
    location.name = "Owner1LastName";
    location.pdf.x = 719;
    location.pdf.y = 4016;
    location.pdf.height = 166;
    location.pdf.width = 1360;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 32;
    location.name = "Owner1MiddleName";
    location.pdf.x = 3527;
    location.pdf.y = 4016;
    location.pdf.height = 166;
    location.pdf.width = 99;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 33;
    location.name = "Owner1SuffixName";
    location.pdf.x = 2118;
    location.pdf.y = 4017;
    location.pdf.height = 166;
    location.pdf.width = 265;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 45;
    location.name = "Owner2FirstName";
    location.pdf.x = 2411;
    location.pdf.y = 4943;
    location.pdf.height = 166;
    location.pdf.width = 1099;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 43;
    location.name = "Owner2LastName";
    location.pdf.x = 723;
    location.pdf.y = 4943;
    location.pdf.height = 166;
    location.pdf.width = 1360;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 46;
    location.name = "Owner2MiddleName";
    location.pdf.x = 3542;
    location.pdf.y = 4943;
    location.pdf.height = 166;
    location.pdf.width = 99;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 44;
    location.name = "Owner2SuffixName";
    location.pdf.x = 2119;
    location.pdf.y = 4943;
    location.pdf.height = 166;
    location.pdf.width = 265;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 5;
    location.tabOrder = 52;
    location.name = "Owner3FirstName";
    location.pdf.x = 2411;
    location.pdf.y = 5255;
    location.pdf.height = 166;
    location.pdf.width = 1099;
    page.locations.push(location);


    // ---------------------------------------------------------------------------
    // Sixth Page
    page = new Model.Page();
    page.pageNo = 6;
    page.locations = [];
    newDocument.form.pages.push(page);

    location = new Model.ScaledLocation();
    location.pageNo = 6;
  location.tabOrder = 134;
  location.name = "Owner1SuffixName";
  location.pdf.x = 2017;
  location.pdf.y = 4004;
  location.pdf.height = 166;
  location.pdf.width = 265;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 144;
  location.name = "Owner2FirstName";
  location.pdf.x = 2311;
  location.pdf.y = 4930;
  location.pdf.height = 166;
  location.pdf.width = 1099;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 142;
  location.name = "Owner2LastName";
  location.pdf.x = 622;
  location.pdf.y = 4930;
  location.pdf.height = 166;
  location.pdf.width = 1360;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 145;
  location.name = "Owner2MiddleName";
  location.pdf.x = 3441;
  location.pdf.y = 4930;
  location.pdf.height = 166;
  location.pdf.width = 99;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 143;
  location.name = "Owner2SuffixName";
  location.pdf.x = 2019;
  location.pdf.y = 4930;
  location.pdf.height = 166;
  location.pdf.width = 265;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 149;
  location.name = "Owner3FirstName";
  location.pdf.x = 2311;
  location.pdf.y = 5242;
  location.pdf.height = 166;
  location.pdf.width = 1099;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 147;
  location.name = "Owner3LastName";
  location.pdf.x = 622;
  location.pdf.y = 5242;
  location.pdf.height = 166;
  location.pdf.width = 1360;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 150;
  location.name = "Owner3MiddleName";
  location.pdf.x = 3441;
  location.pdf.y = 5242;
  location.pdf.height = 166;
  location.pdf.width = 99;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 148;
  location.name = "Owner3SuffixName";
  location.pdf.x = 2019;
  location.pdf.y = 5242;
  location.pdf.height = 166;
  location.pdf.width = 265;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 107;
  location.name = "VehicleMake";
  location.pdf.x = 4333;
  location.pdf.y = 2016;
  location.pdf.height = 166;
  location.pdf.width = 516;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 106;
  location.name = "VehicleYear";
  location.pdf.x = 3633;
  location.pdf.y = 2016;
  location.pdf.height = 166;
  location.pdf.width = 433;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 117;
  location.name = "FuelTypeNaturalGas";
  location.pdf.x = 4687;
  location.pdf.y = 2354;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 113;
  location.name = "FuelTypePlugInHybrid";
  location.pdf.x = 5312;
  location.pdf.y = 2200;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 102;
  location.name = "TitleNumber";
  location.pdf.x = 6338;
  location.pdf.y = 1746;
  location.pdf.height = 166;
  location.pdf.width = 933;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 105;
  location.name = "LicensePlateNumber";
  location.pdf.x = 610;
  location.pdf.y = 2016;
  location.pdf.height = 166;
  location.pdf.width = 1349;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 108;
  location.name = "VehicleVesselBodyStyle";
  location.pdf.x = 4990;
  location.pdf.y = 2016;
  location.pdf.height = 166;
  location.pdf.width = 199;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 109;
  location.name = "VehicleWeightLength";
  location.pdf.x = 5284;
  location.pdf.y = 2016;
  location.pdf.height = 166;
  location.pdf.width = 933;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 103;
  location.name = "VehicleGreaterThan26KYes";
  location.pdf.x = 6913;
  location.pdf.y = 1901;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 104;
  location.name = "VehicleGreaterThan26KNo";
  location.pdf.x = 6913;
  location.pdf.y = 2042;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 120;
  location.name = "VehicleFarmIDNumber";
  location.pdf.x = 610;
  location.pdf.y = 2344;
  location.pdf.height = 166;
  location.pdf.width = 1200;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 121;
  location.name = "FleetAccountNumber";
  location.pdf.x = 1863;
  location.pdf.y = 2344;
  location.pdf.height = 166;
  location.pdf.width = 864;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 122;
  location.name = "EquipmentNumber";
  location.pdf.x = 2883;
  location.pdf.y = 2344;
  location.pdf.height = 166;
  location.pdf.width = 700;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 110;
  location.name = "FuelTypeGas";
  location.pdf.x = 3641;
  location.pdf.y = 2200;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 115;
  location.name = "FuelTypeElectric";
  location.pdf.x = 3641;
  location.pdf.y = 2354;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 111;
  location.name = "FuelTypeDiesel";
  location.pdf.x = 4178;
  location.pdf.y = 2200;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 116;
  location.name = "FuelTypePropane";
  location.pdf.x = 4178;
  location.pdf.y = 2354;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 112;
  location.name = "FuelTypeHybrid";
  location.pdf.x = 4687;
  location.pdf.y = 2200;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 118;
  location.name = "FuelTypeOther";
  location.pdf.x = 5312;
  location.pdf.y = 2354;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 123;
  location.name = "FuelTypeOtherDescription";
  location.pdf.x = 5726;
  location.pdf.y = 2344;
  location.pdf.height = 166;
  location.pdf.width = 515;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 125;
  location.name = "OdometerReading";
  location.pdf.x = 752;
  location.pdf.y = 3269;
  location.pdf.height = 166;
  location.pdf.width = 933;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 126;
  location.name = "OdometerReadingDate";
  location.pdf.x = 2893;
  location.pdf.y = 3269;
  location.pdf.height = 166;
  location.pdf.width = 1016;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 124;
  location.name = "OdometerReadingExceeds";
  location.pdf.x = 4304;
  location.pdf.y = 3165;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 127;
  location.name = "OdometerReadingNotActual";
  location.pdf.x = 4304;
  location.pdf.y = 3314;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 130;
  location.name = "Owner1BusinessName";
  location.pdf.x = 610;
  location.pdf.y = 3990;
  location.pdf.height = 166;
  location.pdf.width = 4600;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 128;
  location.name = "Owner";
  location.pdf.x = 3389;
  location.pdf.y = 3895;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 129;
  location.name = "Lessee";
  location.pdf.x = 4404;
  location.pdf.y = 3895;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 135;
  location.name = "Owner1StreetAddress";
  location.pdf.x = 612;
  location.pdf.y = 4331;
  location.pdf.height = 166;
  location.pdf.width = 3680;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 136;
  location.name = "Owner1MailingStreetAddress";
  location.pdf.x = 4379;
  location.pdf.y = 4331;
  location.pdf.height = 166;
  location.pdf.width = 3516;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 137;
  location.name = "Owner1CityStateZIP";
  location.pdf.x = 612;
  location.pdf.y = 4651;
  location.pdf.height = 166;
  location.pdf.width = 2374;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 138;
  location.name = "Owner1County";
  location.pdf.x = 3043;
  location.pdf.y = 4651;
  location.pdf.height = 166;
  location.pdf.width = 1200;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 139;
  location.name = "Owner1MailingCityStateZIP";
  location.pdf.x = 4378;
  location.pdf.y = 4651;
  location.pdf.height = 166;
  location.pdf.width = 2199;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 140;
  location.name = "OwnerMailingCounty";
  location.pdf.x = 6677;
  location.pdf.y = 4651;
  location.pdf.height = 166;
  location.pdf.width = 1349;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 101;
  location.name = "VehicleIdentificationNumber";
  location.pdf.x = 3454;
  location.pdf.y = 1746;
  location.pdf.height = 166;
  location.pdf.width = 2016;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 141;
  location.name = "Owner2BusinessName";
  location.pdf.x = 610;
  location.pdf.y = 4923;
  location.pdf.height = 166;
  location.pdf.width = 4600;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 146;
  location.name = "Owner3BusinessName";
  location.pdf.x = 610;
  location.pdf.y = 5236;
  location.pdf.height = 166;
  location.pdf.width = 4600;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 153;
  location.name = "OneTimeStreetAddress";
  location.pdf.x = 610;
  location.pdf.y = 5554;
  location.pdf.height = 166;
  location.pdf.width = 3516;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 156;
  location.name = "OneTimeCityStateZIP";
  location.pdf.x = 610;
  location.pdf.y = 5839;
  location.pdf.height = 166;
  location.pdf.width = 3681;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 154;
  location.name = "VehicleStreetAddress";
  location.pdf.x = 4764;
  location.pdf.y = 5554;
  location.pdf.height = 166;
  location.pdf.width = 3199;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 157;
  location.name = "VehicleCityStateZIP";
  location.pdf.x = 4379;
  location.pdf.y = 5839;
  location.pdf.height = 166;
  location.pdf.width = 2199;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 158;
  location.name = "VehicleCounty";
  location.pdf.x = 6677;
  location.pdf.y = 5839;
  location.pdf.height = 166;
  location.pdf.width = 1349;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 151;
  location.name = "OneTimeMailingAddressRegular";
  location.pdf.x = 4205;
  location.pdf.y = 5403;
  location.pdf.height = 148;
  location.pdf.width = 97;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 152;
  location.name = "OneTimeMailingAddressTitle";
  location.pdf.x = 4205;
  location.pdf.y = 5506;
  location.pdf.height = 148;
  location.pdf.width = 97;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 155;
  location.name = "OneTimeMailingAddressBoth";
  location.pdf.x = 4205;
  location.pdf.y = 5606;
  location.pdf.height = 148;
  location.pdf.width = 97;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 114;
  location.name = "TrailerOver8000LBS";
  location.pdf.x = 6913;
  location.pdf.y = 2200;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 119;
  location.name = "TrailerLessThan8000LBS";
  location.pdf.x = 6913;
  location.pdf.y = 2354;
  location.pdf.height = 148;
  location.pdf.width = 125;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 132;
  location.name = "Owner1FirstName";
  location.pdf.x = 2307;
  location.pdf.y = 4003;
  location.pdf.height = 166;
  location.pdf.width = 1099;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 131;
  location.name = "Owner1LastName";
  location.pdf.x = 618;
  location.pdf.y = 4003;
  location.pdf.height = 166;
  location.pdf.width = 1360;
  page.locations.push(location);

  location = new Model.ScaledLocation();
  location.pageNo = 6;
  location.tabOrder = 133;
  location.name = "Owner1MiddleName";
  location.pdf.x = 3427;
  location.pdf.y = 4003;
  location.pdf.height = 166;
  location.pdf.width = 99;
  page.locations.push(location);

    // ---------------------------------------------------------------------------
    // Seventh Page
    page = new Model.Page();
    page.pageNo = 7;
    page.locations = [];
    newDocument.form.pages.push(page);

    location.pageNo = 7;
    location.tabOrder = 159;
    location.name = "Remarks1";
    location.pdf.x = 879;
    location.pdf.y = 462;
    location.pdf.height = 166;
    location.pdf.width = 3598;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 160;
    location.name = "Remarks2";
    location.pdf.x = 356;
    location.pdf.y = 743;
    location.pdf.height = 166;
    location.pdf.width = 4098;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 161;
    location.name = "Remarks3";
    location.pdf.x = 356;
    location.pdf.y = 1025;
    location.pdf.height = 166;
    location.pdf.width = 4098;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 162;
    location.name = "Remarks4";
    location.pdf.x = 356;
    location.pdf.y = 1313;
    location.pdf.height = 166;
    location.pdf.width = 4098;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 163;
    location.name = "VehicleVesselReconstructedYes";
    location.pdf.x = 601;
    location.pdf.y = 5745;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 164;
    location.name = "VehicleAssembled";
    location.pdf.x = 601;
    location.pdf.y = 5896;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 165;
    location.name = "VehicleVesselReplica";
    location.pdf.x = 601;
    location.pdf.y = 6173;
    location.pdf.height = 148;
    location.pdf.width = 125;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 166;
    location.name = "Component1PartNameVIN";
    location.pdf.x = 358;
    location.pdf.y = 7191;
    location.pdf.height = 166;
    location.pdf.width = 2514;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 167;
    location.name = "Component2PartNameVIN";
    location.pdf.x = 2974;
    location.pdf.y = 7191;
    location.pdf.height = 166;
    location.pdf.width = 2514;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 168;
    location.name = "Component3PartNameVIN";
    location.pdf.x = 5555;
    location.pdf.y = 7191;
    location.pdf.height = 166;
    location.pdf.width = 2514;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 169;
    location.name = "SchoolDistrictName";
    location.pdf.x = 358;
    location.pdf.y = 8757;
    location.pdf.height = 166;
    location.pdf.width = 7348;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 171;
    location.name = "Consort1FirstName";
    location.pdf.x = 3322;
    location.pdf.y = 10143;
    location.pdf.height = 166;
    location.pdf.width = 1180;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 172;
    location.name = "Consort1MiddleName";
    location.pdf.x = 4505;
    location.pdf.y = 10143;
    location.pdf.height = 166;
    location.pdf.width = 1180;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 173;
    location.name = "Consort1LastName";
    location.pdf.x = 5692;
    location.pdf.y = 10143;
    location.pdf.height = 166;
    location.pdf.width = 1430;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 174;
    location.name = "Consort1SuffixName";
    location.pdf.x = 7154;
    location.pdf.y = 10143;
    location.pdf.height = 166;
    location.pdf.width = 278;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 170;
    location.name = "Consort1FullName";
    location.pdf.x = 3294;
    location.pdf.y = 10136;
    location.pdf.height = 166;
    location.pdf.width = 4516;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 176;
    location.name = "Consort2FirstName";
    location.pdf.x = 3322;
    location.pdf.y = 10304;
    location.pdf.height = 166;
    location.pdf.width = 1180;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 177;
    location.name = "Consort2MiddleName";
    location.pdf.x = 4505;
    location.pdf.y = 10304;
    location.pdf.height = 166;
    location.pdf.width = 1180;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 178;
    location.name = "Consort2LastName";
    location.pdf.x = 5692;
    location.pdf.y = 10304;
    location.pdf.height = 166;
    location.pdf.width = 1430;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 179;
    location.name = "Consort2SuffixName";
    location.pdf.x = 7154;
    location.pdf.y = 10304;
    location.pdf.height = 166;
    location.pdf.width = 278;
    page.locations.push(location);

    location = new Model.ScaledLocation();
    location.pageNo = 7;
    location.tabOrder = 175;
    location.name = "Consort2FullName";
    location.pdf.x = 3294;
    location.pdf.y = 10303;
    location.pdf.height = 166;
    location.pdf.width = 4516;
    page.locations.push(location);

    // ---------------------------------------------------------------------------
    return newDocument;
  }
}


