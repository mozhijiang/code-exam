import { baseUrl } from '../config';
class StorageMeta {
    storageId: number;
    hash: string;
    mime: string;
    name: string;
    originalName: string;
    path: string;
    time: string;

    static displayPath(path: string) {
        return baseUrl + '/' + path;
    }
}
export {
    StorageMeta
}