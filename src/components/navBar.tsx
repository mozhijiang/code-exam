import { FC } from "react"
import { useTheme } from "../utils/useHooks";
import { AtNavBar } from "taro-ui";
import './navBar.css';
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
class Props {
    title: string
};
const NavBar: FC<Props> = (props) => {
    const theme = useTheme();
    const windowInfo = Taro.getWindowInfo();
    return (
        <View style={{ paddingTop: windowInfo.statusBarHeight, height: Taro.pxTransform(85) }}>
            <AtNavBar
                customStyle={{
                    background: theme.secondaryBackground, color: theme.color,
                    paddingTop: windowInfo.statusBarHeight
                }}
                title={props.title}
                fixed={true}
            />
        </View>
    );
}
export default NavBar;