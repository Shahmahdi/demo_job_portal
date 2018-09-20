import React from 'react';
import { Nav } from '../components/nav';
import { Head } from '../components/head';
// import { TextFieldWithLabel } from '../components/common/TextField';
import { Form } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import Store from 'store/main';
import { compose, mapProps } from 'recompose';
import { inject, observer } from 'mobx-react';
import { User } from 'store/User';

const optionsDropdown = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

interface SignUpProps {
  store: typeof Store.Type;
  guestUser: typeof User.Type;
}

export const SignUp = observer((props: SignUpProps) => (
  <div>
    <Head title="Home" />
    <Nav />
    <div>
      <div className="center fl measure w-100">
      <p className="tc f3">Sign up</p>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' placeholder='Name' value={props.guestUser.name} />
          <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Dropdown placeholder='Skills' fluid multiple selection options={optionsDropdown} />
        <Form.Group widths='equal'>
          <Form.Input fluid label='Email' placeholder='Email' />
          <Form.Input fluid label='Mobile No.' placeholder='mobile' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Password' placeholder='password' />
          <Form.Input fluid label='Retype password' placeholder='Retype Password' />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    </div>
  </div>
));

const enhance = compose<SignUpProps, {}>(
  inject('store'),
  observer,
  mapProps<SignUpProps, SignUpProps>(props => ({
    ...props,
    gurstUser: props.store.userStore.guest
  }))
);

export default enhance(SignUp);
