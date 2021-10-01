This package is still in development phase. I appreciate anyone who wants to contribute anything.

### THANKS A LOT IN ADVANCE for anyone willing to help!

# About

This package is meant to provide [`firebase-admin`](https://firebase.google.com/docs/admin/setup) SDK functionalities to be available for the [`react-admin`](https://marmelab.com/react-admin/) project.

That is mainly add support for

- Firebase Users CRUD (Not from the Firestore collections/Realtime Database!)
- Custom Claims CRUD
- Interact with databases from `firebase-admin` SDK
- Able to configure a list of allowed Firebase Users which can access the API.

# Architecture

I open to anyones suggestions, but this is what i came up initially.

## 1. ClientDataProvider

This will be custom `react-admin` [data provider](https://marmelab.com/react-admin/DataProviders.html), which will fetch data from the passed api point.

## 2. ServerSideDataResolver

This will resolve the client request from server environment. i.e perform CRUD on firebase users, etc, etc. Basically utilizing the `firebase-admin`

# Development

We can use the Next.js example in the `example` directory.
You can `npm link` to link the package for instant updates while developing.

```
# watch and build the library
tsc --watch

# run the example and test
cd example
sudo npm link ../
npm install ../

```

# Testing

Need to do manual testing.
