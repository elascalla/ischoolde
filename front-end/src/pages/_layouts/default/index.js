import React from "react";
import PropTypes from "prop-types";

import MenuLateral from "../../../components/MenuLateral";

import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <MenuLateral />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
