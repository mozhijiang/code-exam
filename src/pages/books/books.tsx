import { FC, useEffect, useState } from "react";
import TabBar from "../../components/tabBar";
import globalData from '../../utils/globalData';
import { ListData } from "../../api/baseApi";
import { BookMeta } from "../../api/bookApi";
import BookItem from "./bookItem";
import GlobalStyle from "../../components/globalStyle";
import NavBar from "../../components/navBar";
const Books: FC = () => {
    const [bookList, setBookList] = useState(new ListData<BookMeta>());
    useEffect(() => {
        setBookList({
            ...bookList,
            loading: true
        })
        globalData.api.bookApi.list(bookList.query).then((res) => {
            setBookList((oldBookList) => {
                const newBookList = { ...oldBookList };
                newBookList.list = oldBookList.list.concat(res.data[0]);
                if (oldBookList.query.page * oldBookList.query.size > res.data[1]) newBookList.more = false;
                newBookList.loading = false;
                return newBookList;
            })
        })
    }, [bookList.query]);
    const bookItems = bookList.list.map(book => <BookItem book={book} />)
    return (
        <GlobalStyle>
            <NavBar title="卑微前端在线刷题" />
            {bookItems}
            <TabBar />
        </GlobalStyle>
    );
}
export default Books;