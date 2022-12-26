import React from "react";

import Forms from "../../../components/Forms";
import FormSelect from "../../../components/FormElements/FormSelect";
import FormText from "../../../components/FormElements/FormText";
import FormButton from "../../../components/FormElements/FormButton";

function Address() {
  return (
    <Forms>
      <FormSelect label="Address Type" col={12} />
      <FormText label="Street 1" col={12} />
      <FormText label="Street 2" col={12} />
      <FormSelect label="Birth Country" col={12} />
      <FormText label="City" col={12} />
      <FormText label="Zip Code" col={12} />
      <FormButton col={12}>Add Address</FormButton>
    </Forms>
  );
}

export default Address;
