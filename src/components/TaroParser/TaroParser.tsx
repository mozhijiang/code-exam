import {Component} from 'react'
import {View} from '@tarojs/components'
import {Props, State} from "./types/Parser";
import {Data} from "./types/Data";
import Decode from "./Decode/decode";
import convert from './utils/parser'
import config from './utils/config'
import './style/main.scss';

export default class TaroParser extends Component<Props, State> {

  static options = {
    addGlobalClass: true
  }

  constructor(props) {
    super(props);
    this.convert(props).then((nodes) => {
      if (this.props.onLoaded) {
        this.props.onLoaded()
      }
      this.setState({
        nodes: nodes as Data
      })
    }).catch((e) => {
      console.log(e)
    })
  }

  async convert(props) {
    const {content, type} = props
    return new Promise(resolve => {
      const nodes = convert(content || '', type || 'markdown') as unknown as Data
      resolve(nodes)
    });
  }

  imgClick = (src, imgList) => {
    if (this.props.onImgClick) {
      this.props.onImgClick(src, imgList)
    }
  }

  linkClick = (href) => {
    if (this.props.onLinkClick) {
      this.props.onLinkClick(href)
    }
  }

  findAllImgUrl(node, imgList) {
    if ((node.tag === 'image' || node.tag === 'img') && node.attr && node.attr.src) {
      imgList.push(node.attr.src)
    }
    if (node.child) {
      node.child.forEach((o, i) => {
        o.index = i
        this.findAllImgUrl(o, imgList)
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content != this.props.content) {
      this.convert(nextProps).then((nodes) => {
        if (this.props.onLoaded) {
          this.props.onLoaded()
        }
        this.setState({
          nodes: nodes as Data
        })
      }).catch((e) => {
        console.log(e)
      })
    }
  }

  render() {
    const {latexApi, yumlApi, theme} = this.props
    const imgList = []
    if (this.state != null && this.state.nodes != null) {
      this.findAllImgUrl(this.state.nodes, imgList)
    }
    const className = `${config.classPrefix}h2w ${config.classPrefix}h2w-` + (theme ? theme : 'light')
    return (
      <View className={className}>
        <View className={config.classPrefix + 'h2w__main'}>
          {this.state != null && this.state.nodes &&
          <Decode latexApi={latexApi} yumlApi={yumlApi} onImgClick={(src) => {
            this.imgClick(src, imgList)
          }} onLinkClick={this.linkClick}
            nodes={this.state.nodes}
          />}
        </View>
      </View>
    )
  }
}
