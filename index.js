import React, {useState, useEffect} from 'react';
import {Text, View, ViewStyle, TextStyle} from "react-native";

type Props = {
    state?: 'forward' | 'countDown',
    countDownSeconds?: number,
    maxSeconds?: number,
    style?: ViewStyle,
    fontStyle?: TextStyle,
    onCountDownEnd?: function,
    onMaxSeconds?: function,
    hideHour?: boolean
};

export const TimeCounter = (props: Props) => {
    const [count, setCount] = useState(0);
    const [intervalState, setIntervalState] = useState(0);

    useEffect(() => {
        startInterval();
    }, [props.state, props.countDownSeconds]);

    function startInterval() {
        clearInterval(intervalState);

        const isForward = props.state == 'forward';
        const isCountDown = props.state == 'countDown'
        if (isForward) {
            setCount(0);
        } else if (isCountDown) {
            setCount(props.countDownSeconds);
        }

        const interval = setInterval(() => {
            if (isForward) {
                setCount(count => {
                    const newCount = count + 1
                    if (props.maxSeconds == newCount) {
                        clearInterval(interval);
                        if (props.onMaxSeconds) {
                            props.onMaxSeconds();
                        }
                    }
                    return newCount
                });
            } else if (isCountDown) {
                setCount(count => {
                    if (count > 0) {
                        return (count - 1);
                    } else {
                        clearInterval(interval);
                        if (props.onCountDownEnd) {
                            props.onCountDownEnd();
                        }
                        return 0;
                    }
                });

            }
        }, 1000);

        setIntervalState(interval);
    }

    let hour = Math.floor((count / 3600));
    let minute = Math.floor((count / 60));
    let second = Math.floor(count);

    const hourText = `${hour % 3600 < 10 ? '0' + hour % 3600 : hour % 3600}:`
    const val = `${props?.hideHour ? '' : hourText}${minute % 60 < 10 ? '0' + minute % 60 : minute % 60}:${second % 60 < 10 ? '0' + second % 60 : second % 60}`

    return (
        <View style={{marginVertical: 15, ...props.style}}>
            <Text style={{
                alignSelf: 'center',
                color: 'black',
                fontSize: 23,
                letterSpacing: 1.15,
                ...props.fontStyle
            }}>{val}</Text>
        </View>
    );
};

TimeCounter.defaultProps = {
    state: 'forward',
    countDownSeconds: 120,
    hideHour: true
}

export default TimeCounter;
