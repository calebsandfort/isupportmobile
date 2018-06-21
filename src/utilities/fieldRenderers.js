import * as React from "react";
import { Item, Input, Icon, Label, Picker } from "native-base";
import moment from 'moment';

export function renderLoginInput({ input, label, type, meta: { touched, error, warning } }) {
  return (
    <Item error={error && touched}>
      <Icon active name={input.name === "username" ? "person" : "unlock"} />
      <Input
        placeholder={input.name === "username" ? "Username" : "Password"}
        secureTextEntry={input.name === "password" ? true : false}
        {...input}
      />
    </Item>
  );
}

export function renderReadonlyInput({ input, label, icon, iconClick }) {
  return (
    <Item disabled fixedLabel>
      <Label>{label}</Label>
      <Input disabled
        {...input}
      />
      {icon && <Icon active name={icon} onPress={iconClick} />}
    </Item>
  );
}

export function renderInput({ input, label }) {
  return (
    <Item fixedLabel>
      <Label>{label}</Label>
      <Input
        {...input}
      />
    </Item>
  );
}

export function renderPicker({ input, label, pickerItems }) {
  return (
    <Item stackedLabel>
      <Label>{label}</Label>
      <Picker
        mode="dropdown"
        selectedValue={input.value}>
        {pickerItems.map((pickerItem:PickerItem) =>
          <Picker.Item key={pickerItem.value} label={pickerItem.label} value={pickerItem.value} />
        )}
      </Picker>
    </Item>
  );
}

export function renderSelect ({ input, label, children, ...custom }) {
  return (
      <Picker {...input}
        selectedValue={input.value}
        onValueChange={(value, index) => input.onChange(value)}
        children={children} {...custom} />
  );
}

export function dateFormatter (value){
  return moment(value).format('MM/DD/YYYY h:mm:ss A');
}

export type PickerItem = {
  label: string,
  value: string
}
