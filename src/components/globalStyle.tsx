import { View } from '@tarojs/components';
import { FC } from 'react';
import CSS from 'csstype';
import { useTheme } from '../utils/useHooks';
import Taro from '@tarojs/taro';
const GlobalStyle: FC = (props: any) => {
    const theme = useTheme();
    const globalStyle: CSS.Properties = {
        background: theme.secondaryBackground,
        color: theme.color,
        height: '100vh',
        width: Taro.pxTransform(750)
    };
    return (
        <View style={globalStyle}>
            {props['children']}
        </View>
    );
}
export default GlobalStyle