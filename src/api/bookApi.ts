import { BaseApi } from "./baseApi";
import { StorageMeta } from "./storageApi";
import { TagMeta } from "./tagApi";
class BookMeta {
    bookId: number;
    name: string;
    cover: StorageMeta;
    tags: TagMeta[];
    level: number;
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