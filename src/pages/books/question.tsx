import Taro from "@tarojs/taro";
import { FC, useEffect, useState } from "react";
import GlobalStyle from "../../components/globalStyle";
import NavBar from "../../components/navBar";
import { QuestionMeta } from "../../api/questionApi";
import globalData from '../../utils/globalData';
// import '~taro-parse/dist/style/main.scss';
import TaroParser from 'taro-parse-fix';
const Question: FC = () => {
    const [question, setQuestion] = useState<QuestionMeta>(new QuestionMeta());
    useEffect(() => {
        const questionId = (Taro.getCurrentInstance().router?.params?.questionId || 0) as unknown as number;
        if (questionId) {
            globalData.api.questionApi.findOne(questionId).then(res => {
                setQuestion(res.data);
                console.log('setQuestion...', res.data);
            })
        }
    }, []);
    const params = Taro.getCurrentInstance().router?.params as unknown as { questionId: number, title: string };

    return <GlobalStyle>
        <NavBar title={params.title || '卑微前端在线刷题'} goBack={true} />
        {/* <TaroParser
            type='markdown'
            // yumlApi='https://md.werfei.com/?yuml'
            // latexApi='https://md.werfei.com/?tex'
            content={question.ask || ''}
        /> */}
    </GlobalStyle>
};
export default Question;