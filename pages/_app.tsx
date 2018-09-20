import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from "mobx-react"
import Store from '../store/main';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'tachyons/css/tachyons.min.css';
import 'semantic-ui-css/semantic.min.css';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
    <Container>
      <Provider store={Store} >
        <Component  {...pageProps}/>
      </Provider>
    </Container>
    );
  }
}