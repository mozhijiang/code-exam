import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { FC } from "react";
import { AtIcon, AtRate, AtTag } from "taro-ui";
import { QuestionMeta, QuestionType } from "../../api/questionApi";
import CSS from 'csstype';
import { BaseTheme } from "../../theme/theme";
import { useTheme } from "../../utils/useHooks";
class Props {
    catelog: QuestionMeta
}
const itemStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0 ${Taro.pxTransform(BaseTheme.baseSpace)}`,
    borderBottom: '1px solid #ccc',
    paddingRight: 0
};
const Catelog: FC<Props> = (props) => {
    const theme = useTheme();
    return <View style={itemStyle}>
        <View>
            <View style={{ margin: `${Taro.pxTransform(15)} 0` }}>{props.catelog.title}</View>
            <AtRate customStyle={{ margin: `${Taro.pxTransform(15)} 0` }} value={props.catelog.level} />
        </View>
        <View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <AtTag type='primary' size="small" active={true}>{QuestionType[props.catelog.type]}</AtTag>
                <AtIcon prefixClass='at-icon' value='chevron-right' size='30' color={theme.color}></AtIcon>
            </View>
        </View>
    </View>;
}
export default Catelog;