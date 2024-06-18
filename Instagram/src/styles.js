import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  language: {
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  formContainer: {
    width: '90%',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#3897f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#003569',
    textAlign: 'center',
  },
  createAccountButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#3897f0',
  },
  createAccountButtonText: {
    color: '#3897f0',
  },
});

export default styles;
