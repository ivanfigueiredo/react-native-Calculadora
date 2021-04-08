import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView} from 'react-native';
import lista from './src/components/lista.js'
import styles from './src/components/estilo.js'


export default function App(){


        const [valor, setValor] = useState('');
        const [resultado, setResultado] = useState(0);
        const [operador, setOperador] = useState("");

    const operacao = () => {

        var numeros = '';
        var operator = '';

         if (valor === ''){
           setResultado("Error");
          }
         else{
           numeros = valor.split(/\+|\*|\/|\-/g);
           operator = valor.match(/\+|\*|\-|\/|\C.*?/g);

           switch (operator[0]){
          
              case '+':
                setResultado(parseFloat(numeros[0]) + parseFloat(numeros[1]));
                break;
  
              case '-':
                setResultado(parseFloat(numeros[0] - parseFloat(numeros[1])));
                break;
  
              case '/':
                if( parseFloat(numeros[1]) <= 0){
                  setResultado("Divisao Invalida!")
                }
                else{
                  setResultado(parseFloat(numeros[0] / parseFloat(numeros[1])));
                }
                  break;
        
                case '*':
                  setResultado(parseFloat(parseFloat(numeros[0]) * parseFloat(numeros[1])));
                  break;
      
            }
          }
    }

  function handlePress(item){
    if(item === "="){
      operacao();
    }
    else if(item === "C"){
      setValor('');
      setResultado(0);
    }
    else{
      setValor(valor + item);
    }
  }

  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.topo}>
        <Text style={styles.texto}>{valor}</Text>
      </SafeAreaView>  
      <SafeAreaView style={styles.result}>
        <Text style={styles.texto}>{resultado}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.area}>
        {lista.map((item, index)=>{
          return(
            <TouchableOpacity key={index} style={styles.item} onPress={() => handlePress(item.id)}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </SafeAreaView>         
  );  
}
