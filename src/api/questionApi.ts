import { BaseApi } from "./baseApi";
enum QuestionType {
    ratio = '单选',
    multiSelect = '多选'
}
class QuestionMeta {
    questionId: number;
    title: string;
    ask: string;
    type: QuestionType;
    level: number;
    sort: number;
    answerMemo: string;
}
class QuestionApi extends BaseApi<QuestionMeta> {
    static moduleName = 'question';
    constructor() {
        super(QuestionApi.moduleName);
    }
}
export {
    QuestionMeta, QuestionApi,QuestionType
}