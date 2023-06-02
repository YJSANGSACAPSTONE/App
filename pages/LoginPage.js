import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as Font from "expo-font";

function LoginPage({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    styles.logo.width = windowWidth * 0.4;
    styles.logo.height = windowWidth * 0.4;

    styles.kakaoButton.width = windowWidth * 0.8;
    styles.kakaoButton.height = windowWidth * 0.2;

    const [isFont, setIsFont] = useState(false);
    // 폰트 적용
    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
            godlife: require('../assets/fonts/godlife.ttf')
            });
            setIsFont(true);
        };

        if (!Font.isLoaded('godlife')) {
            loadFont();
        } else {
            setIsFont(true);
        }
    }, []);

    const handleClick = () => {
        // 웹뷰 컴포넌트를 표시하기 위해 페이지의 URI를 설정합니다.
        // const KakaoLoginAPI = 'https://kauth.kakao.com/oauth/authorize?client_id=87c054c34eca4ca3541ab083e086cd12&redirect_uri=http://localhost:3000/kakaoLogin&response_type=code';
        // // 웹뷰를 표시하는 화면으로 이동합니다.
        // navigation.navigate('WebViewScreen', { uri: KakaoLoginAPI });
        navigation.navigate('ChallengeAll');

    };

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <View>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/img/logo.png')} style={styles.logo} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>갓생플래너</Text>
          </View>
          <View style={styles.loginContainer}>
            <TouchableOpacity onPress={handleClick}>
              <Image source={require('../assets/img/kakao_login.png')} style={styles.kakaoButton} />
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <TouchableOpacity onPress={() => {}}>
              {/* <Text style={styles.signupButton}>회원가입</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginPage;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#4c6ef5',
  },
  containerInner: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex:4,
      padding: 25,
      justifyContent: 'flex-end',
      alignItems:'center',
  },
  logo: {
    
  },
    titleContainer: {
      flex:1,
    padding: 25,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'godlife',
  },
  loginContainer: {
    padding: 25,
  },
  kakaoButton: {
    
  },
  signupContainer: {
    padding: 25,
  },
  signupButton: {
    color: '#fff',
    fontSize: 16,
  },
};