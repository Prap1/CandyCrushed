import React, {FC, useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import {screenWidth} from '../utils/Constants';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useIsFocused} from '@react-navigation/native';
import {useSound} from '../navigation/SoundContext';
import LottieView from 'lottie-react-native';
import { Image } from 'react-native-svg';
import ScalePress from '../components/ui/ScalePress';
import { navigate } from '../utils/NavigationUtil';

const HomeScreen: FC = () => {
  const {playSound, stopSound} = useSound();
  const isFocused = useIsFocused();
  const translateY = useSharedValue(-200); // Start with the image off-screen

  // Handle sound play and stop
  // useEffect(() => {
  //   if (isFocused) {
  //     playSound('bg', true); // Play background sound when focused
  //   } else {
  //     stopSound('bg'); // Stop background sound when unfocused
  //   }
  // }, [isFocused, playSound, stopSound]);

  // Handle animation of the image
  useEffect(() => {
    if (isFocused) {
      // Animate image when focused
      translateY.value = withTiming(0, {duration: 3000});
    } else {
      // Optionally animate the image back when unfocused
      translateY.value = withTiming(-200, {duration: 3000});
    }
  }, [isFocused, translateY]);

  // Animated style for translating the image vertically
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <ImageBackground
      source={require('../assets/images/b2.png')}
      style={commonStyles.simpleContainer}>
      <Animated.Image
        source={require('../assets/images/banner.png')}
        style={[styles.img, animatedStyle]}
      />
      <LottieView
        source={require('../assets/animations/bird.json')}
        speed={1}
        loop
        autoPlay
        hardwareAccelerationAndroid
        style={styles.lottieView}/>
        <ScalePress style={styles.playButtonContainer}onPress={()=>navigate('LevelScreen')}>
          <Image source={require('../assets/icons/play.png')}
          style={styles.playButton}
          />
        </ScalePress>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    width: screenWidth,
    height: screenWidth * 0.8,
    position: 'absolute',
    resizeMode: 'contain',
    top: -20,
  },
  lottieView: {
    height: 200,
    width: 200,
    position: 'absolute',
    top: '30%',
    left: -20,
    transform: [{scaleX: -1}],
  },
  playButton:{
    resizeMode:'contain',
    width:screenWidth*0.5,
    height:screenWidth*0.2,
  },
  playButtonContainer:{
    marginTop:200,
  }
});

export default HomeScreen;
