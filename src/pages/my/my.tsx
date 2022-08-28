import { View, Text } from "@tarojs/components";
import { FC } from "react";
import TabBar from '../../components/tabBar'
import GlobalStyle from "../../components/globalStyle";
import { useTheme } from '../../utils/useHooks';
import CSS from 'csstype';
import { AtAvatar, AtList, AtListItem } from 'taro-ui';
import defaultCover from '../../static/default_avatar.jpg';
import Taro from "@tarojs/taro";
import { BaseTheme } from "../../theme/theme";
import globalData from "../../utils/globalData";
import './my.css';
const userInfoStyle: CSS.Properties = {
    display: "flex"
};
const My: FC = () => {
    const theme = useTheme();
    const smallFontStyle: CSS.Properties = {
        color: theme.secondaryColor,
        fontSize: Taro.pxTransform(BaseTheme.smallFont)
    };
    const userContainerStyle: CSS.Properties = {
        display: "flex",
        padding: Taro.pxTransform(BaseTheme.baseSpace),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.secondaryBackground
    };
    const actionContainerStyle: CSS.Properties = {
        backgroundColor: theme.background,
        marginTop: 0,
        margin: Taro.pxTransform(BaseTheme.baseSpace),
        borderRadius: Taro.pxTransform(BaseTheme.baseSpace),
        overflow: 'hidden',
        color: theme.color
    };
    return (
        <GlobalStyle>
            <View style={userContainerStyle}>
                <View style={userInfoStyle}>
                    <AtAvatar size="large" image={defaultCover}></AtAvatar>
                    <View style={{ marginLeft: Taro.pxTransform(20) }}>
                        <View>engine</View>
                        <View style={{
                            marginTop: Taro.pxTransform(BaseTheme.baseSpace),
                            ...smallFontStyle
                        }}>编辑个人资料</View>
                    </View>
                </View>
                <View>
                    <View style={smallFontStyle}>主页</View>
                </View>
            </View>
            <View style={actionContainerStyle}>
                <AtList customStyle={{ backgroundColor: theme.background }}>
                    <AtListItem title='收藏题库' arrow='right' />
                    <AtListItem title='收藏题目' arrow='right' />
                    <AtListItem title='做错题目' arrow='right' />
                    <AtListItem title='我的评论' arrow='right' />
                    <AtListItem title='深色模式' isSwitch switchIsCheck={theme.name === 'dark'} onSwitchChange={(e) => globalData.changeTheme(e.target['value'] ? 'dark' : 'light')} />
                </AtList>
            </View>
            <TabBar tabIndex={1} />
        </GlobalStyle>
    );
}
export default My;