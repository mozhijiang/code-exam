import { BaseApi } from "./baseApi";
import { StorageMeta } from "./storageApi";
import { TagMeta } from "./tagApi";
class BookMeta {
    bookId: string;
    name: string;
    cover: StorageMeta;
    tags: TagMeta[];
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