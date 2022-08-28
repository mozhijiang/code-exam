import utils from "../utils/utils";
import Taro from "@tarojs/taro";
import { baseUrl } from '../config';
class ListQuery {
    page: number;
    size: number;
    [key: string]: any;
    constructor(page = 1, size = 20) {
        this.page = page;
        this.size = size;
    }
};
class ListData<E> {
    query: ListQuery;
    loading = false;
    more = true;
    list: E[] = [];
    constructor(page = 1, size = 20) {
        this.query = new ListQuery(page, size)
    }
}
function requestContainer<E>(option: Taro.request.Option<any, any>) {
    return new Promise((resolve, reject) => {
        option.success = (res) => {
            resolve(res);
        };
        option.fail = (res) => {
            reject(res);
        }
        Taro.request(option);
    }) as Promise<Taro.request.SuccessCallbackResult<E>>;
}
class BaseApi<E>{
    moduleName: string;
    baseUrl: string;
    constructor(moduleName: string) {
        this.moduleName = moduleName;
        this.baseUrl = `${baseUrl}/${this.moduleName}`;
    }
    list(query: ListQuery) {
        return requestContainer<[E[], number]>({
            url: this.baseUrl + '?' + utils.objectToUrl(query),
            method: 'GET'
        });
    }
    all() {
        return requestContainer<E[]>({
            url: this.baseUrl + '/all',
            method: 'GET'
        })
    }
    findOne(id: number) {
        return requestContainer<E>({
            url: this.baseUrl + '/' + id,
            method: 'GET'
        })
    }
}
export {
    ListQuery, BaseApi, ListData
}