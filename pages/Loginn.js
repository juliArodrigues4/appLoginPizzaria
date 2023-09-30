import {useState, useEffect} from 'react';

import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

import Firebase from '../firebase';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser]=useState();


  function Login (){
    Firebase.auth().signInWithEmailAndPassword(email,senha).catch(function(error){

      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    })
  }

      useEffect(()=>{
      Firebase.auth().onAuthStateChanged(function(user){
       setUser(user);
         if (initializing) setInitializing (false);
       })
     },[])

     if (user) {
        return navigation.navigate('Homee');
       }
        

  return (
    <SafeAreaView style={styles.container}>

    <Image source={require('../assets/pepe.jpg')} style={styles.logo}/>
    <Text style={styles.textoentrada}> Pizzaria do Mário </Text>

    <View style={styles.cont}>
     <TextInput
     placeholderTextColor={'#fff'}
     style={styles.textoinput}
     placeholder="Digite o email"
     onChangeText={(email) => setEmail(email)}
     value={email}
     />

     <TextInput
     placeholderTextColor={'#fff'}
     style={styles.textoinput}
     placeholder="Digite a senha"
     onChangeText={(senha) => setSenha(senha)}
     value={senha}
     />

     <TouchableOpacity
     style={styles.botao}
     onPress={() => {
       Login();
     }}>
     <Text style={styles.textobotao}> Acessar </Text>
     </TouchableOpacity>
     </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    marginTop: 35,
    backgroundColor: '#A52A2A',
    alignContent:'center',
    alignItems: 'center'
  },
  logo:
  {
    width:300,
    height: 250,
    borderRadius: 50,
    marginTop: 30
  },
  textoinput:{
    width: 270,
    height: 60,
    paddingLeft: 10,
    backgroundColor: '#FFA500',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    marginTop: 15,
  },
  textoentrada:{
    textAlign: 'center',
    marginTop:55,
    marginBottom:35,
    fontSize: 25,
    color: '#fff',
    fontWeight:'bold',
    paddingVertical: 14,
  },
  botao:{
    width: 200,
    backgroundColor: '#8B0000',
    height: 43,
    marginTop:35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#FFFAFA'
  },
  textobotao:{
    fontSize: 25,
    color:'#fff',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  cont:{
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});
