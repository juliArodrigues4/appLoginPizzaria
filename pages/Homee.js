import {Text, StyleSheet, Image, View, ScrollView} from 'react-native';

export default function App (){

return(

<View style={styles.container}>
<ScrollView>
<View>
<Text style={styles.titulob}> Cardapio de Pizzas </Text>
</View>


<View style={styles.cxfoto}>
<Image
style={styles.img}
resizeMode="center"
source={require('../assets/port.jpg')}
/>
<Text style={styles.titulo}> Portuguesa -  R$ 65,00</Text>
</View>

<View style={styles.cxfoto}>
<Image
style={styles.img}
resizeMode="center"
source={require('../assets/mag.jpg')}
/>
<Text style={styles.titulo}> Maguerita - R$ 65,00 </Text>
</View>

<View style={styles.cxfoto}>
<Image
style={styles.img}
resizeMode="center"
source={require('../assets/pepe.jpg')}
/>
<Text style={styles.titulo}> Peperoni - R$ 55,00</Text>
<Text style={styles.subtitulo}>  </Text>
</View>

<View style={styles.cxfoto}>
<Image
style={styles.img}
resizeMode="center"
source={require('../assets/frangcat.png')}
/>
<Text style={styles.titulo}> Frango com Catupiry - R$ 70,00 </Text>
</View>

<View style={styles.cxfoto}>
<Image
style={styles.img}
resizeMode="center"
source={require('../assets/camar.jpg')}
/>
<Text style={styles.titulo}> Camarão - R$ 95,00 </Text>
</View>

</ScrollView>
</View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8B1A1A',
    padding: 0,
    marginTop: 30,
    alignItems: 'center',
    alignContent:'center',
  },
 titulo: {
    marginTop: -20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color:'#fff'
  },
titulob:{
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color:'#fff'
    },
  img:
  {
    marginTop: -10,
    width: 250,
    height: 250
  },
  
  cxfoto:
  {
    backgroundColor:'#FFA500',
    width: 300,
    height: 290,
    alignItems: 'center',
    alignContent:'center',
    justifyContent:'center',
    verticalAlign: 14,
    marginBottom: 45,
    borderRadius: 20
  },
});
