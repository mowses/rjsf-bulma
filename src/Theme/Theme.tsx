//import React from "react";
//import ArrayFieldTemplate from "../ArrayFieldTemplate";
//import ErrorList from "../ErrorList";
//import Fields from "../Fields";
//import FieldTemplate from "../FieldTemplate";
//import ObjectFieldTemplate from "../ObjectFieldTemplate";
//import Widgets from "../Widgets";
import { ThemeProps } from "@rjsf/core";
//import { utils } from "@rjsf/core";
import { RegistryWidgetsType, RegistryFieldsType } from "@rjsf/utils";
//import Button from 'react-bulma-components/src/components/button';

//const { getDefaultRegistry } = utils;
//const { fields, widgets } = getDefaultRegistry();

const widgets: RegistryWidgetsType = {

};

const fields: RegistryFieldsType = {

};

/*const DefaultChildren = () => (
  <Button className="submit-button" type="submit">Submit</Button>
);*/

const Theme: ThemeProps = {
  //children: <DefaultChildren />,
  fields,
  widgets,
};

export default Theme;
