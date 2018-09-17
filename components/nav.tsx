import React from 'react'
// import Link from 'next/link'
import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
// import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";

// const links = [
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
// ].map(link => {
//   // link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

export const Nav = () => (
  // <nav>
  //   <ul>
  //     <li>
  //       <Link prefetch href="/">
  //         <a>Home</a>
  //       </Link>
  //     </li>
  //     <ul>
  //       {links.map(({ href, label }) => (
  //         <li>
  //           <Link href={href}>
  //             <a>{label}</a>
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </ul>

  //   <style>{`
  //     :global(body) {
  //       margin: 0;
  //       font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
  //         Helvetica, sans-serif;
  //     }
  //     nav {
  //       text-align: center;
  //     }
  //     ul {
  //       display: flex;
  //       justify-content: space-between;
  //     }
  //     nav > ul {
  //       padding: 4px 16px;
  //     }
  //     li {
  //       display: flex;
  //       padding: 6px 8px;
  //     }
  //     a {
  //       color: #067df7;
  //       text-decoration: none;
  //       font-size: 13px;
  //     }
  //   `}</style>
  // </nav>
  // <nav className="bp3-navbar">
  //   <div className="bp3-navbar-group bp3-align-left">
  //     <div className="bp3-navbar-heading">Job Portal</div>
  //     <input className="bp3-input" placeholder="Search files..." type="text" />
  //   </div>
  //   <div className="bp3-navbar-group bp3-align-right">
  //     <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
  //     <button className="bp3-button bp3-minimal bp3-icon-document">Login</button>
  //     <span className="bp3-navbar-divider"></span>
  //     <button className="bp3-button bp3-minimal bp3-icon-user"></button>
  //     <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
  //     <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
  //   </div>
  // </nav>
  <Navbar>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>Blueprint</NavbarHeading>
      <NavbarDivider />
      <Button icon="home" text="Home" />
      <Button icon="document" text="Files" />
    </NavbarGroup>
  </Navbar>
)

// export default Nav
