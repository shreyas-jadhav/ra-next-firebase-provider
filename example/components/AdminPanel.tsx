import * as React from "react";
import { Admin } from 'react-admin';
import { ClientDataProvider } from "ra-next-firebase-provider";

const dataProvider = new ClientDataProvider()

const App = () => <Admin dataProvider={dataProvider} />;

export default App;