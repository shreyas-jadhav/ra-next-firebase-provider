import admin from 'firebase-admin';
import serviceAccount from '../serviceAccount.json';
if (!admin.apps.length) {
    admin.initializeApp({
        // @ts-ignore
        credential: admin.credential.cert(serviceAccount)
    })
}