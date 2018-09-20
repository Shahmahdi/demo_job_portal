import React from 'react'
import { Head } from '../components/head';
import { Nav } from '../components/nav';
import { TextField } from '../components/common/TextField';
import { Button, Intent } from '@blueprintjs/core';
import { PasswordField } from '../components/common/PasswordField';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns center measure">
        <div className="fl w-100-ns pa2">
          <form className="pt-control-group pt-vertical pt-fill">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            {/* {props.error ?
        <div className="f6 db mv1 pt-intent-danger pt-tag">
          {props.error}
        </div> : undefined} */}
            <TextField
              id="username"
              leftIcon="person"
              // error={props.error}
              // value={props.userName}
              placeholder="Enter Username"
              large={true}
            // onChange={props.setUserName}
            />
            <PasswordField
              id="password"
              placeholder="Enter Password or Activation code"
              // error={props.error}
              // value={props.password}
              large={true}
            // onPasswordChange={props.setPassword}
            />
            <Button
              className="pt-large"
              icon="log-in"
              text="Login"
              // intent={props.error ? Intent.DANGER : Intent.PRIMARY}
              intent={Intent.PRIMARY}
              type="submit"
            // onClick={props.login}
            />
          </form>
        </div>
      </div>
    </div>

    <style jsx={true}>{`
      
    `}</style>
  </div>
)

export default Home
