import React from "react";

import Forms from "../../../components/Forms";
import FormSelect from "../../../components/FormElements/FormSelect";
import FormText from "../../../components/FormElements/FormText";
import FormNumber from "../../../components/FormElements/FormNumber";
import FormButton from "../../../components/FormElements/FormButton";

function Insurance() {
  return (
    <Forms>
      <FormSelect label="Insurance Provider" col={12} />
      <FormText label="Insurance Name" col={12} />
      <FormText label="Card Number [NSTC No]" col={12} />
      <FormText label="Insurance Number [NSSI No]" col={12} />
      <FormText label="IMIS Code" col={12} />
      <FormNumber label="Initial Balance" col={12} />
      <FormButton col={12}>Add Insurance</FormButton>
    </Forms>
  );
}

export default Insurance;
