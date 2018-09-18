import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'tachyons/css/tachyons.min.css';
import { Nav } from '../components/nav';
import { Head } from '../components/head';
import { TextFieldWithLabel } from '../components/common/TextField';

export const SignUp = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div>
      <form action="">
        <TextFieldWithLabel
          id="Name"
          label="Name"
          placeholder="Name"
          inline={true}
        />

        <TextFieldWithLabel
          id="gender"
          label="Gender"
          placeholder="Gender"
          inline={true}
        />

        <TextFieldWithLabel
          id="skills"
          label="Skills"
          placeholder="Skills"
          inline={true}
        />

        <TextFieldWithLabel
          id="Email"
          label="Email"
          placeholder="Email"
          inline={true}
        />

        <TextFieldWithLabel
          id="password"
          label="Password"
          placeholder="password"
          inline={true}
        />

        <TextFieldWithLabel
          id="confirm_password"
          label="Confirm Password"
          placeholder="confirm password"
          inline={true}
        />

        <button 
          type="button" 
          className="bp3-button bp3-icon-add"
        >
          Submit
        </button>

      </form>
    </div>
  </div>
);

export default SignUp;
