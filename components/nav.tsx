import React from 'react'
import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";

export const Nav = () => (
  <Navbar>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>Blueprint</NavbarHeading>
      <NavbarDivider />
      <Button icon="home" text="Home" />
      <Button icon="document" text="Files" />
    </NavbarGroup>
  </Navbar>
)
