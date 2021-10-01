import { GetListParams } from 'ra-core';
import admin from 'firebase-admin'

export interface AdminGetListParams extends GetListParams {
    adminPath?:  string;
}
interface IUserRecord extends admin.auth.UserRecord {
    id: string;
}
/**
 * @class ServerSideResolver
 */
class ServerSideResolver {

    async getUsers(): Promise<IUserRecord[]> {
        const firebaseUsers =await admin.auth().listUsers();
        let usersData = firebaseUsers.users.map(u => ({ ...u, id: u.uid }));
        return usersData;
    }
    async getList<T>(query: AdminGetListParams ): Promise<T>  {
    
        let res;
        // to do firestore api call;
        return res as unknown as T;
    }
    async getOne<T>() {
    
        let res;
    
        return res;
    
    
    }
    async getMany() {
    
        let res;
    
        return res;
    
    
    }
    async getManyReference() {
    
        let res;
    
        return res;
    
    
    }
    async create() {
    
        let res;
    
        return res;
    
    
    }
    async update() {
    
        let res;
    
        return res;
    
    
    }
    async updateMany() {
    
        let res;
    
        return res;
    
    
    }
    async deleteOne() {
    
        let res;
    
        return res;
    
    
    }
    async deleteMany() {
    
        let res;
    
        return res;
    
    
    }
    
    
}





export default ServerSideResolver