import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { CommuterTitle } from "../commuter/CommuterTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const CardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="balance" source="balance" />
        <ReferenceInput
          source="commuter.id"
          reference="Commuter"
          label="Commuter"
        >
          <SelectInput optionText={CommuterTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="validTill" source="validTill" />
      </SimpleForm>
    </Edit>
  );
};
