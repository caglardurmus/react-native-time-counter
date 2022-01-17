# react-native-time-counter

## Install

`$ npm install react-native-time-counter --save` or `$ yarn add react-native-time-counter --save`  


## Import
```javascript
import TimeCounter from 'react-native-time-counter';
```

## Props
| Name | Description | Type | Default Value |
| :--- | :----- | :--- | :---: |
| state | Counter type "forward" or "countdown"| string | forward |
| countdownSeconds | Countdown start seconds | number | 120 |
| maxSeconds | Counter end seconds | number | null |
| onCountdownEnd | Todo when countdown end  | function | null |
| onMaxSeconds | Todo when counter equal to max seconds | null |
| hideHour | To hide hour text | boolean |  true |
| style | Container style | object |  |
| fontStyle |  Text style | object |  |

## Forward Usage
```javascript

<TimeCounter state={"forward"}
             hideHour={false}
             onMaxSeconds={() => console.log('Test')}
             maxSeconds={10}/>

```

## Countdown Usage
```javascript

<TimeCounter state={"countdown"}
             hideHour={false}
             onCountdownEnd={()=>console.log('Test')}
             countdownSeconds={10}/>

```

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](http://www.bynogame.com/tr/destekle/caglardurmus)
