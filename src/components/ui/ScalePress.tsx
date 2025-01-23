import { FC } from "react";
import { Touchable, TouchableOpacity, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { playSound } from "../../utils/SoundUtility";

interface ScalePressProps {
    onPress?: ()=>void;
    children:React.ReactNode;
    style?:ViewStyle
}
const ScalePress:FC<ScalePressProps>=({style,onPress,children})=>{
    const scaleValue= new Animated.value(1);
    const onPressIn=()=>{
        playSound('ui')
        Animated.spring(scaleValue,{
            toValue:1.1,
            useNativeDriver:true
        }).start()
    }
    const onPressOut=()=>{
        playSound('ui')
        Animated.spring(scaleValue,{
            toValue:1.1,
            useNativeDriver:true
        }).start()
    }
    return(
        <TouchableOpacity>
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            activeOpacity={1}
            style={{...style}}
            <Animated.View style={[{transform:[{scale:scaleValue}],width:'100%'}]}>
            {children}

            </Animated.View>
            </TouchableOpacity>
    ) 
}
export default ScalePress