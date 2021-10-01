import { DataProvider, GetListParams, GetManyParams , GetManyResult, GetListResult, Record, CreateParams,  CreateResult, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetManyReferenceParams, GetManyReferenceResult, GetOneParams, GetOneResult, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult} from "react-admin";

/**
 * @class ClientDataProvider
 */
class ClientDataProvider implements DataProvider {
    private _serverUrl: string;

    
    /**
     * Creates an instance of ClientDataProvider.
     * @param {string} [serverUrl=`http://localhost:3000/api`]
     * @memberof ClientDataProvider
     */
    constructor(serverUrl: string = `http://localhost:3000/api`) {
        this._serverUrl = serverUrl;
    }
    
    
    async getList<RecordType extends Record = Record>(resource: string, params: GetListParams): Promise<GetListResult<RecordType>> {

        const res = await fetch(this._serverUrl + `/${resource}`)
        if (res.ok) {
            const data: GetListResult<RecordType> = await res.json();
            return data;
        }
        return Promise.reject();
    }
    

    async getOne<RecordType extends Record = Record>(resource: string, params: GetOneParams): Promise<GetOneResult<RecordType>>  {
        const res = await fetch(this._serverUrl + `/${resource}`)
        if (res.ok) {
            const data: GetOneResult<RecordType> = await res.json();
            return data;
        }
        return Promise.reject();
    };
    async getMany<RecordType extends Record = Record>(resource: string, params: GetManyParams): Promise<GetManyResult<RecordType>>  {
        // @ts-ignore
        return 
    }
    async getManyReference<RecordType extends Record = Record>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>>  {
        // @ts-ignore
        return 
    }
    async update<RecordType extends Record = Record>(resource: string, params: UpdateParams<any>): Promise<UpdateResult<RecordType>>  {
        // @ts-ignore
        return
    }
    async updateMany(resource: string, params: UpdateManyParams<any>): Promise<UpdateManyResult>  {
        // @ts-ignore
        return
    }
    async create<RecordType extends Record = Record>(resource: string, params: CreateParams<any>): Promise<CreateResult<RecordType>>  {
        // @ts-ignore
        return
    }
    async delete<RecordType extends Record = Record>(resource: string, params: DeleteParams): Promise<DeleteResult<RecordType>> {
        // @ts-ignore
        return
    }
    async deleteMany(resource: string, params: DeleteManyParams): Promise<DeleteManyResult>{
        // @ts-ignore
        return
     }

}

export default ClientDataProvider;