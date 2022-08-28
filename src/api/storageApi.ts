import { baseUrl } from '../config';
class StorageMeta {
    hash: string;
    mime: string;
    name: string;
    originalName: string;
    path: string;
    storageId: string;
    time: string;

    static displayPath(path: string) {
        return baseUrl + '/' + path;
    }
}
export {
    StorageMeta
}