import { View } from "@tarojs/components";
import { FC, useEffect, useState } from "react";
import TabBar from "@/components/tabBar";
import globalData from '@/utils/globalData';
import { ListData } from "@/api/baseApi";
import { BookMeta } from "@/api/bookApi";
const Books: FC = () => {
    const [bookList, setBookList] = useState(new ListData<BookMeta>());
    useEffect(() => {
        setBookList((oldBookList) => {
            oldBookList.loading = true;
            return oldBookList;
        });
        globalData.api.bookApi.list(bookList.query).then((res) => {
            setBookList((oldBookList) => {
                oldBookList.list = oldBookList.list.concat(res.data[0]);
                if (oldBookList.query.page * oldBookList.query.size > res.data[1]) oldBookList.more = false;
                oldBookList.loading = false;
                return oldBookList;
            })
        })
    }, [bookList.query]);
    return (
        <View>
            <View>this is books page</View>
            <TabBar />
        </View>
    );
}
export default Books;