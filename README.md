## react-native-verification-code
> react-native随机验证码
>主要依赖库 [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)具体原生相关操作请参考以上网址.
### start

```jsx
import VerificationCode from 'react-native-verification-code';
```
### react-native-verfication-code api

|       属性      |      描述     |   参数类型 |默认值 |
|----------------|:-------------:|:-------------:|------:|
| containerStyle | 容器样式       |   Object | |
| textStyle      | 验证码文本样式  |   Object | |
| codeLength     | 验证码长度      |   Number | 4 |
| mode     | 模式默认字母，支持letter,number两种      |  String | `letter` |
| isColor     | 是否开启验证码随机字体颜色      |   Boolean | false |
| isBgColor     | 是否开启容器背景随机颜色      |   Boolean | false |
| time     | 响应时间内多次点击无效      |   Number | 200 |
| onClick     | 点击事件      |   Function |  |

### example截图

![avatar](https://github.com/ai4code/react-native-verification-code/blob/master/image/exp.jpg)
