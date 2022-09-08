import { FC, useEffect, useState } from "react";
import { useTheme } from "../../utils/useHooks";
import NavBar from "../../components/navBar";
import GlobalStyle from "../../components/globalStyle";
import Taro from "@tarojs/taro";
import { ListData } from "../../api/baseApi";
import { QuestionMeta } from "../../api/questionApi";
import globalData from "../../utils/globalData";
import Catelog from "./catelog";
const CatelogList: FC = () => {
    const params = Taro.getCurrentInstance().router?.params as unknown as { bookId: number, bookName: string };
    const theme = useTheme();
    const questionListInit = new ListData<QuestionMeta>();
    questionListInit.query.columns = 'book-bookId';
    questionListInit.query['ident-book-bookId'] = params.bookId;
    const [questionList, setQuestionList] = useState(questionListInit);
    useEffect(() => {
        setQuestionList({
            ...questionList,
            loading: true
        })
        globalData.api.questionApi.list(questionList.query).then((res) => {
            setQuestionList((oldQuestionList) => {
                const newQuestionList = { ...oldQuestionList };
                newQuestionList.list = oldQuestionList.list.concat(res.data[0]);
                if (oldQuestionList.query.page * oldQuestionList.query.size > res.data[1]) newQuestionList.more = false;
                newQuestionList.loading = false;
                return newQuestionList;
            })
        })
    }, [questionList.query]);
    const catelogTags = questionList.list.map(question => <Catelog catelog={question} />)
    return (
        <GlobalStyle>
            <NavBar title={params.bookName || '卑微前端在线刷题'} goBack={true} />
            {catelogTags}
        </GlobalStyle>
    );
}
export default CatelogList;