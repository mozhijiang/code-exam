import Taro from "@tarojs/taro";
import { FC } from "react";
import { AtTabBar } from "taro-ui";
import Theme from "@/theme/theme";
class Props {
    tabIndex?= 0;
};
const TabBar: FC<Props> = (props) => {
    const tabBars = [
        {
            item: { title: '题库', iconPrefixClass: 'iconfont', iconType: 'tiku' },
            path: '/pages/books/books'
        },
        {
            item: { title: '我的', iconPrefixClass: 'iconfont', iconType: 'wode' },
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
        <AtTabBar fixed selectedColor={Theme.base} tabList={tabBars.map(tab => tab.item)} current={props.tabIndex || 0} onClick={tabBarClick} />
    );
}
export default TabBar;