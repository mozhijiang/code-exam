import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { FC, useEffect } from 'react';
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.scss';
import './icon.scss';
import globalData from './utils/globalData';
const App: FC = (props: any) => {
  useEffect(() => {
    Taro.getStorage<string>({
      key: 'theme',
      success: function (res) {
        if (res?.data && globalData.currentThtme !== res.data) globalData.changeTheme(res.data)
      }
    })
  }, []);
  return (
    <View>
      {props.children}
    </View>
  );
}
export default App
