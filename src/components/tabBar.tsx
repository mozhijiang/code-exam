import Taro from "@tarojs/taro";
import { FC } from "react";
import { AtTabBar } from "taro-ui";
import { useTheme } from '../utils/useHooks';
class Props {
    tabIndex?= 0;
};
const TabBar: FC<Props> = (props) => {
    const theme = useTheme();
    const tabBars = [
        {
            item: { title: 'ι’εΊ', iconPrefixClass: 'iconfont', iconType: 'tiku' },
            path: '/pages/books/books'
        },
        {
            item: { title: 'ζη', iconPrefixClass: 'iconfont', iconType: 'wode' },
            path: '/pages/my/my'
        }
    ];
    function tabBarClick(value: number) {
        if (props.tabIndex !== value) {
            Taro.reLaunch({
                url: tabBars[value].path
            })
        }
    }
    return (
        <AtTabBar fixed selectedColor={theme.base} color={theme.color} backgroundColor={theme.background} tabList={tabBars.map(tab => tab.item)} current={props.tabIndex || 0} onClick={tabBarClick} />
    );
}
export default TabBar;