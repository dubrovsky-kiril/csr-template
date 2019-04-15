import "normalize.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "components/App/App.container";

const client = new ApolloClient({ uri: NODE_WEB_API_URL });

const render = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept(() => render(App));
}
