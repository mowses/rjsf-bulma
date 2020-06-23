import React from "react";
import ArrayFieldTemplate from "../ArrayFieldTemplate";
import ErrorList from "../ErrorList";
import Fields from "../Fields";
import FieldTemplate from "../FieldTemplate";
import ObjectFieldTemplate from "../ObjectFieldTemplate";
import Widgets from "../Widgets";
import { ThemeProps } from "@rjsf/core";
import { utils } from "@rjsf/core";

const Box = require('react-bulma-components/lib/components/box');
const Button = require('react-bulma-components/lib/components/button');
const { getDefaultRegistry } = utils;

const { fields, widgets } = getDefaultRegistry();

const DefaultChildren = () => (
  <Box>
    <Button type="submit">Submit</Button>
  </Box>
);

const Theme: ThemeProps = {
  children: <DefaultChildren />,
  ArrayFieldTemplate,
  fields: { ...fields, ...Fields },
  FieldTemplate,
  ObjectFieldTemplate,
  widgets: { ...widgets, ...Widgets },
  ErrorList,
};

export default Theme;
