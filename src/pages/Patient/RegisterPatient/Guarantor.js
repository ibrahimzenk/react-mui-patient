import React from "react";

import Forms from "../../../components/Forms";
import FormText from "../../../components/FormElements/FormText";
import FormRadio from "../../../components/FormElements/FormRadio";
import RadioButton from "../../../components/FormElements/FormRadio/RadioButton";
import FormSelect from "../../../components/FormElements/FormSelect";
import FormDate from "../../../components/FormElements/FormDate";
import FormGap from "../../../components/FormElements/FormGap";
import FormButton from "../../../components/FormElements/FormButton";

function Guarantor() {
  return (
    <Forms>
      <FormText label="Relationship with Patient" />
      <FormText label="Street 1" />
      <FormText label="Name" />
      <FormText label="Street 2" />
      <FormRadio label="Gender">
        <RadioButton value="male" label="Male" />
        <RadioButton value="female" label="Female" />
        <RadioButton value="other" label="Other" />
      </FormRadio>
      <FormSelect label="Country" />
      <FormText label="Phone Number" />
      <FormSelect label="District/State" />
      <FormDate label="Date Of Birth" />
      <FormText label="City" />
      <FormGap />
      <FormText label="Zip Code" />
      <FormGap />
      <FormButton col={6}>Save</FormButton>
    </Forms>
  );
}

export default Guarantor;
