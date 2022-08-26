import { BaseApi } from "./baseApi";
class BookMeta {
    bookId: number;
    name: string;
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