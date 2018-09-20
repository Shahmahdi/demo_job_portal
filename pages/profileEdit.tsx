import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'tachyons/css/tachyons.min.css';
import { Head } from '../components/head';
import { Nav } from '../components/nav';
import { Tab, Tabs } from "@blueprintjs/core";

const Personal = () => (
  <div>
    personal
    asdf
    as
    asdf
    pasdf
    <p>asdfasdf</p>
    <p>asdfasdf</p>
    <p>asdfasdf</p><p>asdfasdf</p>
    <p>asdfasdf</p>
  </div>
)
const Education = () => (
  <div>
    Education
  </div>
)
const Employment = () => (
  <div>
    employment
  </div>
)
const OtherInformation = () => (
  <div>
    Other information
  </div>
)
const Photograph = () => (
  <div>
    photograph
  </div>
)

export const ProfileEdit = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Tabs id="TabsExample" >
      <Tab id="personal" title="Personal" panel={<Personal />} />
      <Tab id="education" title="Education" panel={<Education />} />
      <Tab id="employment" title="Employment" panel={<Employment />} />
      <Tab id="otherInformation" title="Other information" panel={<OtherInformation />} />
      <Tab id="photograph" title="Photograph" panel={<Photograph />} />
    </Tabs>
  </div>
)

export default ProfileEdit;