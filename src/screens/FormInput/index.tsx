import React, {useState} from 'react';
import {Colors} from '../../fixture/colors';
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {View, KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';
import {fontSize} from '../../fixture/fonts';
import { mockData } from '../../fixture/mockData';
const FormInput = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);

  const formSchema = Yup.object().shape({
    search: Yup.string().required('Asteroid ID Required'),
  });
  const {
    control,
    handleSubmit,
    formState: {isSubmitting},
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: yupResolver(formSchema),
    defaultValues: {
      search: '',
    },
  });
  const onNext = (data: any) => {
    navigation.navigate('AsteroidDetails', {
      id: data?.search,
    });
  };
  const random = () => {
      const data = mockData.asteroidList.near_earth_objects.map(data => {
        return data?.id
      })
      
      // Select a random index from the data array
      const randomIndex = Math.floor(Math.random() * data.length);
      
      // Retrieve the corresponding element
      const randomElement = data[randomIndex];
      
      // Do something with the random element (e.g., display it)
      navigation.navigate('AsteroidDetails', {
        id: randomElement.toString(),
      });
    
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{backgroundColor: Colors.white, flex: 1}}
      enabled={Platform.OS !== 'android'}>
      <View style={styles.container}>
        <View style={{flex: 1, paddingHorizontal: 4}}>
          <View style={{marginVertical: 6, paddingHorizontal: 10}}>
            <Controller
              control={control}
              name={'search'}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => {
                return (
                  <>
                    <TextInput
                      autoFocus
                      // autoCapitalize={autoCapitalize}
                      value={value}
                      style={{
                        ...styles.textInput,
                        borderColor: isFocused
                          ? Colors.primary
                          : Colors.secondaryColor,
                      }}
                      onBlur={() => {
                        setIsFocused(false);
                        onBlur();
                      }}
                      onChangeText={txt => {
                        setIsFocused(true);
                        onChange(txt);
                      }}
                      placeholder={'Enter asteroid ID'}
                    />
                    {error ? (
                      <Text style={styles.errMsg}>{error?.message}</Text>
                    ) : null}
                  </>
                );
              }}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <LottieView
              source={require('./../../assets/lottie/astronout.json')}
              style={{height: 220, width: 220, alignSelf: 'center'}}
              loop
              autoPlay
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 9}}>
          <TouchableOpacity
            testID="submit-button"
            style={styles.button}
            disabled={isSubmitting}
            onPress={handleSubmit(onNext)}>
            <Text style={styles.nxtText}>
              {isSubmitting ? 'Submitting' : 'Next'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="random-asteroid"
            style={styles.btnRandom}
           
            onPress={random}>
            <Text style={styles.randomText}>
              Random Asteroid
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default React.memo(FormInput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 50,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 100,
    marginVertical: 12,
    paddingVertical: 10,
  },
  errMsg: {
    fontSize: fontSize.sm,
    color: Colors.danger,
  },
  nxtText: {
    fontSize: fontSize.md,
    color: Colors.white,
    alignSelf: 'center',
  },
  textInput: {
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    color: Colors.secondaryColor,
    fontSize: 16,
  },
  btnRandom: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 100,
    marginVertical: 12,
    paddingVertical: 10,
  },
  randomText: {
    fontSize: fontSize.md,
    color: Colors.primary,
    alignSelf: 'center',
  },
});