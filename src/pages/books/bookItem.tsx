import { BookMeta } from "../../api/bookApi";
import { StorageMeta } from "../../api/storageApi";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import CSS from 'csstype';
import { FC } from "react";
import { useTheme } from '../../utils/useHooks';
import defaultCover from '../../static/default_cover.png';
import { BaseTheme } from '../../theme/theme';
class Props {
    book: BookMeta
};
const coverStyle: CSS.Properties = {
    width: Taro.pxTransform(130),
    marginRight: Taro.pxTransform(BaseTheme.baseSpace)
};
const BookItem: FC<Props> = (props) => {
    const theme = useTheme();
    const itemStyle: CSS.Properties = {
        display: 'flex',
        padding: `${Taro.pxTransform(BaseTheme.baseSpace)}`,
        borderTop: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        background: theme.background,
        color: theme.color
    };
    return (
        <View style={itemStyle}>
            <Image style={coverStyle} mode="widthFix" src={
                props.book?.cover?.path ? StorageMeta.displayPath(props.book?.cover?.path) : defaultCover
            } />
            <View>
                <Text>{props.book.name}</Text>
            </View>
        </View>
    );
}
export default BookItem;