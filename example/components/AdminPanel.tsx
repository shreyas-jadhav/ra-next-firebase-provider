import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { ClientDataProvider } from "ra-next-firebase-provider";
import { UserList } from "./Users";

const dataProvider = new ClientDataProvider()

const AdminPanel = () => <Admin  dataProvider={dataProvider} >
    <Resource name="users" list={UserList} />
</Admin>;

export default AdminPanel;