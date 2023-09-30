import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import tandaPanah from './assets/back-23.png'
import qrCode from './assets/qr-code.png'
import Lonceng from './assets/Vector.png'
import garis2 from './assets/garis2.png'
import Group1 from './assets/Layanan.png'
import Group2 from './assets/Pelanggan.png'
import Group3 from './assets/Apsend.png'
import Group4 from './assets/Pesanan.png'
import Group5 from './assets/Laporan.png'
import Group6 from './assets/Produksi.png'
import Icon from './assets/Icon.png'
export default function App() {
  return ( 
    <View style={styles.container}>
      <StatusBar/>
      < View style={styles.topbar}><Text style={
        styles.title
      }>Laundry Bisa</Text>
      <Image
          source={qrCode}style={{
          width:30, 
          height:30,
          marginLeft:300,
          marginTop:-30,
        }}
          />
      <Image
          source={Lonceng}style={{
          width:25, 
          height:28,
          marginLeft:345,
          marginTop:-30,
        }}
          />
     <Image source={tandaPanah}style={{
          widht:10, 
          height:40,
          marginLeft:175,
          marginTop:-31,
          }}/>
         <View>
         <Image source={garis2}style={{
          widht:1, 
          height:2,
          marginTop:260,
          }}/>  
          </View>
           <Image
          source={Icon}style={{
            marginLeft:30,
            marginTop:30,
        }}/>
      
             <Image
          source={Group1}style={{
          width:50, 
          height:50,
          marginLeft:52,
          marginTop:-95,
        }}
          />
             <Image
          source={Icon}style={{
            marginLeft:151,
            marginTop:-65,
        }}/>
        <Image
          source={Group2}style={{
          width:50, 
          height:50,
          marginLeft:172,
          marginTop:-95,
        }}
          />
                <Image
          source={Icon}style={{
            marginLeft:273,
            marginTop:-65,
        }}/>
           <Image
          source={Group3}style={{
          width:50, 
          height:50,
          marginLeft:296,
          marginTop:-95,
        }}
          />
                <Image
          source={Icon}style={{
            marginLeft:273,
            marginTop:70,
        }}/>
         <Image
          source={Group5}style={{
          width:50, 
          height:50,
          marginLeft:296,
          marginTop:-98,
        }}
          />
                  <Image
          source={Icon}style={{
            marginLeft:150,
            marginTop:-60,
        }}/>
          <Image
          source={Group4}style={{
          width:40, 
          height:50,
          marginLeft:176,
          marginTop:-95,
        }}
          />
          <Image
          source={Icon}style={{
            marginLeft:30,
            marginTop:-65,
        }}/>
          <Image
          source={Group6}style={{
          width:40, 
          height:50,
          marginLeft:55,
          marginTop:-95,
        }}
          />
          <Image source={garis2}style={{
          widht:1, 
          height:2,
          marginTop:75,

          }}/>    
      </View>
      < View style={styles.topbarr}>
        <Text style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', alignSelf:"center", fontWeight:"bold"}}>KEUANGAN</Text>
      </View> 
      <View>
      </View>
    <View>
    <Text style={
        styles.paket
      }>Paket:Premium</Text>
    </View>
    <Text style={
        styles.Layanan
      }>Layanan</Text>
    <View>
    <Text style={
        styles.Pelanggan
      }>Pelanggan</Text>
    </View>
    <View>
    <Text style={
        styles.Absensi
      }>Absensi Karyawan</Text>
    </View>
    <View>
    <Text style={
        styles.Produksi
      }>Produksi</Text>
    </View>
    <View>
    <Text style={
        styles.Pesanan
      }>Pesanan</Text>
    </View>
    <View>
    <Text style={
        styles.Laporan 
      }>Laporan</Text>
    </View>
          <View>
    <Text style={
        styles.Bulan
      }>Bulan</Text>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topbar:{
    backgroundColor: '#3849F6',
    height:200,
    width:'auto',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    
  },
  topbarr:{
    backgroundColor: 'white',
    borderColor:'black',
    height:150,
    width:'auto',
    marginLeft:21,
    marginRight:21,
    marginTop:-50,
    borderRadius: 30 ,
    borderWidth:1,
    
  },
  title: {
    fontWeight:"bold",
    color: '#FEBA00',
    fontSize:20,
    marginTop:50,
    marginLeft:17
  },
  paket:{
    fontWeight:"bold",
    color: 'black',
    fontSize: 12,
    marginTop:30,
    marginLeft:5,
  },
  Layanan:{
    fontWeight:"bold",
    color: 'black',
    fontSize: 10,
    marginTop:110,
    marginLeft:50,
  },
  
  Pelanggan:{
    fontWeight:"bold",
    color: 'black',
    fontSize: 10,
    marginTop:-19,
    marginLeft:165,
  },
  Absensi:{
    width:60, 
    height:50,
    fontWeight:"bold",
    color: 'black',
    fontSize: 10,
    marginTop:-30,
    marginLeft:290,
    textAlign: 'center',
  },
  Produksi:{
    fontWeight:"bold",
    color: 'black',
    fontSize: 10,
    marginTop:100,
    marginLeft:49, 
  },
  Pesanan:{
    fontWeight:"bold",
    color: 'black',
    fontSize: 10,
    marginTop:-20,
    marginLeft:170, 
  },
  Laporan:{
    fontWeight:"bold",
    color: 'black',
    fontSize: 10,
    marginTop:-20,
    marginLeft:296, 
  },
  Bulan:{
color: '#737373',
fontSize: 10,
fontWeight: '600',
wordWrap: 'break-word',
marginLeft:100,
marginTop:-400,
  }
  
});


