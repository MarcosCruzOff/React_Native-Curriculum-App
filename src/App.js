/* eslint-disable semi */
import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

import foto from './eu.png'

const App = () => {
  function handlemidia(rede_social) {
    switch (rede_social) {
      case 'github':
        Alert.alert('Meu github:', 'https://github.com/MarcosCruzOff')
        break
      case 'linkedin':
        Alert.alert(
          'Meu Linkedin:',
          'https://www.linkedin.com/in/marcos-cruz-8b9024224/',
        )
        break
      case 'youtube':
        Alert.alert(
          'Meu Youtube:',
          'https://www.linkedin.com/in/marcos-cruz-8b9024224/',
        )
        break

      default:
        break
    }
  }
  return (
    <>
      <SafeAreaView style={style.container}>
        <View style={style.header}>
          <Image source={foto} style={style.img} />
          <Text style={style.title}>Marcos Cruz</Text>
          <Text style={style.subtitle}>Desenvolver Web</Text>
        </View>
        <View style={style.icon}>
          <TouchableOpacity onPress={handlemidia}>
            <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlemidia}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlemidia}>
            <Icon name="youtube" size={30} />
          </TouchableOpacity>
        </View>

        <View style={style.card}>
          <View style={style.cardHeader}>
            <Text style={style.cardTitle}>Experiência Profissional</Text>
          </View>
          <View style={style.cardContent}>
            <Text style={style.cardText}>FeedGet</Text>
            <Text style={style.cardText}>Ecoleta</Text>
            <Text style={style.cardText}>Foodfy</Text>
            <Text style={style.cardText}>Sistema de academia</Text>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.cardHeader}>
            <Text style={style.cardTitle}>Projetos</Text>
          </View>
          <View style={style.cardContent}>
            <Text style={style.cardText}>FeedGet</Text>
            <Text style={style.cardText}>Ecoleta</Text>
            <Text style={style.cardText}>Foodfy</Text>
            <Text style={style.cardText}>Sistema de academia</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    width: '100%',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginVertical: 25,
  },
  title: {
    fontSize: 24,
    color: '#333',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
  },
  icon: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  card: {
    width: '60%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#939393',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  cardHeader: {
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  cardTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  cardText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  cardContent: {},
})

export default App
