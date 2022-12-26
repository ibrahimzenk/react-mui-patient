import React from "react";

import Forms from "../../../components/Forms";
import FormRadio from "../../../components/FormElements/FormRadio";
import RadioButton from "../../../components/FormElements/FormRadio/RadioButton";
import FormText from "../../../components/FormElements/FormText";
import FormDate from "../../../components/FormElements/FormDate";
import FormSelect from "../../../components/FormElements/FormSelect";
import FormNumber from "../../../components/FormElements/FormNumber";
import FormCheckbox from "../../../components/FormElements/FormCheckbox";
import CheckboxButton from "../../../components/FormElements/FormCheckbox/CheckboxButton";

function BasicInfo() {
  return (
    <Forms>
      <FormRadio label="Salutation">
        <RadioButton value="mr" label="Mr" />
        <RadioButton value="ms" label="Ms" />
        <RadioButton value="mrs" label="Mrs" />
      </FormRadio>
      <FormText label="First Name" />
      <FormText label="Middle Name" />
      <FormText label="Last Name" />
      <FormDate label="Date Of Birth" />
      <FormNumber label="Age" />
      <FormText label="Phone Number" />
      <FormText label="LandLine Number" />
      <FormSelect label="Country" />
      <FormText label="Passport Number" />
      <FormSelect label="District/State" />
      <FormText label="Address" />
      <FormSelect label="Blood Group" />
      <FormSelect label="Gender" />
      <FormSelect label="Membership" />
      <FormSelect label="Caste/Ethnic Group" />
      <FormRadio label="Martial Status">
        <RadioButton value="married" label="Married" />
        <RadioButton value="unmarried" label="Unmarried" />
      </FormRadio>
      <FormCheckbox label="Notifications">
        <CheckboxButton label="Yes" />
      </FormCheckbox>
      <FormText label="Employer Info" />
      <FormText label="Previous Last Name" />
      <FormText label="Occupation" />
      <FormText label="Email" />
      <FormText label="Race" />
      <FormText label="PAN Number" />
      <FormCheckbox label="Dialysis Patient">
        <CheckboxButton label="Yes" />
      </FormCheckbox>
    </Forms>
  );
}

export default BasicInfo;
