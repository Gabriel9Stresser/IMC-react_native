import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchablePacity, TouchableOpacity, Linking, TouchableWithoutFeedback, Keyboard, Image, SwipeableListView, Alert } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 16.9){
      alert('Você esta muito abaixo do peso! ' + imc.toFixed(2));
    }
    else if(imc >= 17 && imc < 18.4){
      alert('Você esta abaixo do peso! ' + imc.toFixed(2));
    }
    else if(imc >= 18.5 && imc < 24.9){
      alert('Você esta no seu peso ideal! ' + imc.toFixed(2));
    }
    else if(imc >= 25 && imc < 29.9){
      alert('Você esta levemente acima do peso! ' + imc.toFixed(2));
    }
    else if(imc >= 30 && imc < 34.4){
      alert('Você esta no grau 1 de obesidade! ' + imc.toFixed(2));
    }
    else if(imc >= 35 && imc < 39.9){
      alert('Você esta no grau 2 de obesidade! ' + imc.toFixed(2));
    }
    else if(imc < 40){
      alert('Você esta no grau 3 de obesidade! ' + imc.toFixed(2));
    }
  }


return (
    <DismissKeyboard>
      
  <View style={styles.container}>
     <Text style={styles.title}>Calculadora de IMC</Text>

     <TextInput
     style={styles.input}
     value={peso}
     onChangeText={ (peso) => setPeso(peso) }
     placeholder="Peso (kg)"
     keyboardType="numeric"
     onfocus="this.peso='';"
     />

     <TextInput
     style={styles.input}
     value={altura}
     onChangeText={ (altura) => setAltura(altura) }
     placeholder="Altura (cm)"
     keyboardType="numeric"
     onfocus="this.altura='';"
     />


     <TouchableOpacity 
     style={styles.button}
     onPress={handleSubmit}
     >
       <Text
       style={styles.buttonText}>Calcular</Text>
    </TouchableOpacity>

    <Text 
         style={styles.introwhats}>Clique abaixo para receber dicas sobre saúde e bem estar!</Text>
          <Text 
          style={styles.whats}
          onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=5511975558289'
            );
          }}>WhatsApp
          </Text>
          
    </View>
    </DismissKeyboard>
  );
  
}

 const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor: '#314059',
 },

title:{
  width: 380,
  textAlign: 'center',
  fontFamily: 'Times New Roman',
  marginTop: 30,
  fontSize: 40,  
  padding: 20,
  color: '#121212',
  backgroundColor: '#A7B8FE',
},


input:{
  backgroundColor: '#CED7FF',
    borderRadius: 15,
    marginTop: 45,
    margin: 10,
    padding: 20,
    fontSize: 15,
    color: '#000004',
  },

 button:{
  justifyContent: 'center',
  alignItems: 'center',
  //marginTop: 54,
  marginTop: 45,
  margin: 21,
  backgroundColor: '#7185AA',
  padding: 10,
 },

 buttonText:{
   color: '#fff',
   fontSize: 25,
   textAlign:"center",
   fontWeight:'bold',
 },
 
 introwhats:{
   
  fontFamily: 'Times New Roman',
  fontSize: 18,
  textAlign:"center",
  fontWeight:'bold',
  marginTop: 81,
  backgroundColor: '#7185AA',

 },

 whats:{
  fontSize: 15,
  textAlign:"center",
  fontWeight:'bold',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  margin: 100,
  backgroundColor: '#8ad24e',
  padding: 10,
   }
 } );
