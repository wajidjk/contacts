import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { ContactProvidor } from "./store/contact";
import { ContactDetails, Contacts, ContactEditor } from "./Pages";

export const Main = () => {
  return (
    <Fragment>
      <ContactProvidor>
        <Switch>
          <Route exact path="/">
            <Contacts />
          </Route>
          <Route exact path="/contact/:id">
            <ContactDetails />
          </Route>
          <Route exact path="/edit-contact/:id">
            <ContactEditor />
          </Route>
          <Route exact path="/new-contact/">
            <ContactEditor />
          </Route>
        </Switch>
      </ContactProvidor>
    </Fragment>
  );
};
