import { View } from "@tarojs/components";
import { FC } from "react";
import TabBar from '@/components/tabBar'
const My: FC = () => {
    return (
        <View>
            <View>this is my page</View>
            <TabBar tabIndex={1} />
        </View>
    );
}
export default My;