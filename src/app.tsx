import { View } from '@tarojs/components';
import { FC } from 'react';
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.scss';
import './icon.scss';
const App: FC = (props: any) => {
  return (
    <View>
      {props.children}
    </View>
  );
}
export default App
