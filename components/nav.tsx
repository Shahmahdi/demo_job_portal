import React from 'react';
import Link from 'next/link';

export const Nav = () => (
  <nav className="bp3-navbar .modifier">
    <div className="bp3-navbar-group bp3-align-left">
      <div className="bp3-navbar-heading">Job Portal</div>
    </div>
    <div className="bp3-navbar-group bp3-align-right">
    <Link href="/signUp">
      <a><button className="bp3-button bp3-minimal bp3-icon-home">Sign up</button></a>
    </Link>
    <Link href="/">
      <a><button className="bp3-button bp3-minimal bp3-icon-home">Sign in</button></a>
    </Link>
      {/* <button className="bp3-button bp3-minimal bp3-icon-home">Sign up</button> */}
      {/* <button className="bp3-button bp3-minimal bp3-icon-document">Sign in</button> */}
      <span className="bp3-navbar-divider"></span>
      <button className="bp3-button bp3-minimal bp3-icon-user"></button>
      <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
      <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
    </div>
  </nav>
)
