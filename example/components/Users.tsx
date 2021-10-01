import React from "react";
import { List, Datagrid, TextField, EmailField, ListProps } from 'react-admin';

export const UserList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="displayName" />
        <TextField source="id"  />    
        </Datagrid>
    </List>
);