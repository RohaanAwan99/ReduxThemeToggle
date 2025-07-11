import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Pressable } from 'react-native';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { AddTask, RemoveTask, ToggleTheme } from './redux/action';
import { store } from './redux/store';

const { width, height } = Dimensions.get('screen');

const Screen = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  return (
    <View style={theme == 'light' ? styles.lightContainer : styles.darkContainer}>
      <View style={theme === 'light' ? styles.innerContainerLight : styles.innerContainerDark}>
        <View style={styles.inputBox}>
          <Text style={theme === 'light' ? styles.textStyleLight : styles.textStyleDark}>Username</Text>
          <TextInput
            style={theme === 'light' ? styles.textInputLight : styles.textInputDark}
            placeholder="Username"
            placeholderTextColor={theme === 'light' ? '#888' : '#fff'}
          />
          <Text style={theme === 'light' ? styles.textStyleLight : styles.textStyleDark}>Password</Text>
          <TextInput
            style={theme === 'light' ? styles.textInputLight : styles.textInputDark}
            placeholder="Password"
            placeholderTextColor={theme === 'light' ? '#888' : '#fff'}
          />
        </View>
        <View style={{ position: 'absolute', bottom: 8, right: 8 }}>
          <Pressable
            onPress={() => dispatch(ToggleTheme())}
            style={theme === 'light' ? styles.lightPressable : styles.darkPressable}
          >
            <Text style={theme === 'light' ? styles.textStyleDark : styles.textStyleLight}>Toggle</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  darkContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  innerContainerLight: {
    backgroundColor: '#000',
    height: height * 0.3,
    width: width * 0.7,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  innerContainerDark: {
    backgroundColor: '#fff',
    height: height * 0.3,
    width: width * 0.7,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  inputBox: {
    flexDirection: 'column',
    gap: 12,
  },
  textInputLight: {
    backgroundColor: '#ddd',
    borderRadius: 12,
    color: '#000',
  },
  textInputDark: {
    backgroundColor: '#222',
    borderRadius: 12,
    color: '#fff',
  },
  textStyleLight: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textStyleDark: {
    color: '#000',
    fontWeight: 'bold',
  },
  lightPressable: {
    backgroundColor: '#fff',
    height: 24,
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  darkPressable: {
    backgroundColor: '#000',
    height: 24,
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});