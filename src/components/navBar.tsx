import { FC } from "react"
import { useTheme } from "../utils/useHooks";
import { AtNavBar } from "taro-ui";
import './navBar.css';
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtNavBarProps } from "taro-ui/types/nav-bar";
class Props {
    title: string;
    goBack?: boolean;
};
const NavBar: FC<Props> = (props) => {
    const theme = useTheme();
    const windowInfo = Taro.getWindowInfo();
    const navBarProps: AtNavBarProps = {
        customStyle: {
            background: theme.secondaryBackground, color: theme.color,
            paddingTop: windowInfo.statusBarHeight
        },
        title: props.title,
        fixed: true,
        color: theme.color,
        onClickLeftIcon: () => {
            Taro.navigateBack()
        }
    };
    if (props.goBack) navBarProps.leftIconType = 'chevron-left';
    return (
        <View style={{ paddingTop: windowInfo.statusBarHeight, height: Taro.pxTransform(85) }}>
            <AtNavBar {...navBarProps} />
        </View>
    );
}
export default NavBar;