import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Firebase
import {firebase} from '../../firebase/config';

// Auth context
import {AuthContext} from '../../components/context';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {signUp} = React.useContext(AuthContext);

  const onFooterLinkPress = () => {
    navigation.navigate('LoginScreen');
  };

  const onRegisterPress = () => {
    if (password !== confirmPassword && password.length >= 6) {
      alert("Passwords don't match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email: email,
          cardNumber: cardNumber,
        };
        firebase
          .database()
          .ref('users/' + uid)
          .set(data);
        //signUp(email);
        // usersRef
        //   .doc(uid)
        //   .set(data)
        //   .then(() => {
        //     signUp(email);
        //   })
        //   .catch((error) => {
        //     alert(error);
        //   });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('../../assets/logos/emenza_logo.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Broj studentske kartice"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setCardNumber(text)}
          value={cardNumber}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Lozinka"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Potvrdi lozinku"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}>
          <Text style={styles.buttonTitle}>Registruj se</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Imaš nalog?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Prijavi se.
            </Text>
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Image
            style={{width: 50, height: 50, marginRight: '12%'}}
            source={require('../../assets/logos/uni_logo.png')}
          />
          <Image
            style={{width: 60, height: 60, marginLeft: '12%'}}
            source={require('../../assets/logos/mp_logo.png')}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 120,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#f49049',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#f49049',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '3%',
  },
});

export default RegisterScreen;
