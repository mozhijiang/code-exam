import { Component }  from 'react'
import {Image} from '@tarojs/components'
import {Props,State} from '../types/Img'
import {styleToObj} from "../utils/dom";
import config from '../utils/config'

export default class Img extends Component<Props, State> {

  state = {
    size: {
      w: 0,
      h: 0
    },
    attr: {
      className: '',
      src: '',
      style: ''
    }
  }

  componentWillMount(): void {
    const {data} = this.props
    if (!data) {
      return
    }
    const style = styleToObj(data.attr && data.attr.style ? data.attr.style : '')
    const size = {
      w: 0,
      h: 0
    }
    if (style.width) {
      size.w = parseInt(style.width)
      size.h = parseInt(style.height)
      this.setState({
        size: size
      })
    }
    // 设置公式图片
    this.setState({
      attr: {
        src: data.attr.src,
        className: data.attr.class
      }
    });
  }

  options = {
    addGlobalClass: true
  }

  imgClick = (src) => {
    if(this.props.onImgClick){
      this.props.onImgClick(src)
    }
  }

  render() {
    const {attr, size} = this.state
    const {data} = this.props
    let style
    if (data) {
      style = styleToObj(data.attr && data.attr.style ? data.attr.style : '')
      if (size.w > 0 && size.h > 0) {
        style.width = size.w + 'em'
        style.height = size.h + 'em'
      }
      style.fontSize = 'inherit'
    }
    return (
      data && <Image
        className={config.classPrefix+attr.className}
        onClick={() => {
          this.imgClick(attr.src)
        }}
        lazy-load='true'
        src={attr.src}
        style={style}
      />
    )
  }
}
