import React from "react";
import PropTypes from "prop-types";

import { IoIosSchool } from "react-icons/io/";

import MenuLateral from "../../../components/MenuLateral";

import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <h1>
        <IoIosSchool />
        iSchoolde
      </h1>
      <MenuLateral />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
