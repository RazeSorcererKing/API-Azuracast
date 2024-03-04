import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('Podcast');
  };

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{ uri: 'http://192.168.1.159/public/test/embed' }}
        mixedContentMode="always"
      />
      <View style={styles.buttonContainer}>
        <Button title="Podcast" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const PodcastScreen = () => {
  const [showLocalAudioPlayer, setShowLocalAudioPlayer] = useState(false);

  const handleShowLocalAudioPlayer = () => {
    setShowLocalAudioPlayer(true);
  };

  return (
    <View style={styles.container}>
      {showLocalAudioPlayer ? (
        <LocalAudioPlayer />
      ) : (
        <WebView
          style={styles.podcastWebView}
          source={{ uri: 'http://192.168.1.159/public/1/podcast/1eecbd5f-8ea2-6fc4-8d70-171ed1b80872/episodes' }}
          mixedContentMode="always"
        />
      )}
      <View style={styles.buttonContainer}>
        <Button title="Musique enregistrée" onPress={handleShowLocalAudioPlayer} />
      </View>
    </View>
  );
};


const RadioApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Podcast" component={PodcastScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '80%', // Réduire la hauteur de la WebView à 80% de la hauteur du parent
    marginBottom: 325,
    marginTop: 250,
  },
  podcastWebView: {
    flex: 1,
    width: '100%',
    height: '100%', // Utiliser toute la hauteur disponible
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default RadioApp;
