import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import PropTypes from 'prop-types'; 
import LinearGradient from 'react-native-linear-gradient';
import Modes from './config';
import verificationStyle from './style';
import Asc from './create';

const vcStyle = StyleSheet.create(verificationStyle); 
class VerificationCode extends Component{

  //default props
  static defaultProps = {
     containerStyle: vcStyle.container, //容器样式
     textStyle: vcStyle.textStyle, //验证码文本样式
     codeLength: 4, //验证码长度
     mode: Modes[0], //模式默认字母，支持letter,number两种
     init: () => {},
     isColor: false, //是否开启验证码随机字体颜色
     isBgColor: false, //是否开启容器背景随机颜色
     time: 200, //ms //响应时间内多次点击无效
     onClick: () => {} //点击事件
  }; 

  constructor(props) {
    super(props); 
    this.state = {
      code: this.getCode()
    };
  } 

  //get code value
  getValue = () => this.state.code;

  //refresh code
  refresh = () => {
    if (!this.timer) {
      this.timer = setTimeout(() => {
        const code =  this.getCode();
        this.colors = this.getColors();
        this.setState({
          code
        },() => {
          this.timer = null;
          this.props.onClick
          && this.props.onClick({
            componentName: 'VerificationCode',
            value: code
          })
        })
      }, this.props.time)
    } 
  }

  getColors = () => Asc.createContainerStyle(this.props.isBgColor);

  componentWillMount() {
    this.timer = null;
    this.colors = this.getColors();
  }

  //get code value
  getCode = () => {
    const { mode, codeLength } = this.props; 
    return Asc.randomCode(mode, codeLength);
  }

  componentDidMount() {
    this.props.init && this.props.init(this);
  }
  

  render() { 
    return  ( 
      <TouchableOpacity onPress={this.refresh} activeOpacity={1}>
        <LinearGradient 
          start={{x: 0, y: 0}} 
          end={{x: 1, y: 0}} 
          colors={[...this.colors]}
          style={this.props.containerStyle}
        >
            {
              this.state.code
              && this.state.code.length
              && this.state.code
              .map((v, k) => <Text key={k} 
                style={[
                  this.props.textStyle,
                  {...Asc.createTextStyle(this.props.isColor)
                }]}>{v}</Text>)
            }
        </LinearGradient>
      </TouchableOpacity>  
    )
  }
}

//default proptype
VerificationCode.propTypes = {
  mode: PropTypes.string, 
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  init: PropTypes.func,
  time: PropTypes.number,
  isColor: PropTypes.bool,
  onClick: PropTypes.func,
  isBgColor: PropTypes.bool,
  codeLength: PropTypes.number,
}

export default VerificationCode;
