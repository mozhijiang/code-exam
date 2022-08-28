import { BaseApi } from "./baseApi";
import { StorageMeta } from "./storageApi";
class BookMeta {
    bookId: string;
    name: string;
    cover: StorageMeta
}
class BookApi extends BaseApi<BookMeta> {
    static moduleName = 'book';
    constructor() {
        super(BookApi.moduleName);
    }
}
export {
    BookMeta, BookApi
}