import React from "react";

import Forms from "../../../components/Forms";
import FormText from "../../../components/FormElements/FormText";
import FormRadio from "../../../components/FormElements/FormRadio";
import RadioButton from "../../../components/FormElements/FormRadio/RadioButton";
import FormButton from "../../../components/FormElements/FormButton";

function KinEmergencyContact() {
  return (
    <Forms>
      <FormRadio label="Type" col={12}>
        <RadioButton value="kin" label="KIN" />
        <RadioButton value="emergencycontact" label="Emergency Contact" />
        <RadioButton value="both" label="Both" />
      </FormRadio>
      <FormText label="First Name" col={12} />
      <FormText label="Last Name" col={12} />
      <FormText label="Phone Number" col={12} />
      <FormText label="Relationship" col={12} />
      <FormText label="Comments" col={12} />
      <FormButton col={12}>Add</FormButton>
    </Forms>
  );
}

export default KinEmergencyContact;
