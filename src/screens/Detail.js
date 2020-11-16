import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';

import {
  NavbarContainer,
  TouchableIcon,
  SuggestionItem,
} from '../components/index';
import {colors} from '../styles/colors';

export default ({navigation}) => {
  const [item, setItem] = React.useState({});
  const [suggestions, setSuggestions] = React.useState([]);
  const [fullData, setFullData] = React.useState([]);

  const getSuggestions = React.useCallback(
    (candidates) => {
      let filtered = candidates.filter(
        (x) => x.genre === item.genre && x.title !== item.title,
      );
      return filtered;
    },
    [item],
  );

  React.useEffect(() => {
    let book = navigation.getParam('item');
    setItem(book);
  }, [navigation]);

  React.useEffect(() => {
    let candidates = navigation.getParam('data');
    setFullData(fullData.concat(candidates));
    let sugg = getSuggestions(candidates);
    setSuggestions(sugg);
  }, [navigation, item]);

  return (
    <>
      <NavbarContainer>
        <View style={styles.row}>
          <TouchableIcon
            handlePress={() =>
              navigation.navigate('Books', {item, data: fullData})
            }>
            <Image source={require('../../assets/navigationbar/ic_back.png')}/>
          </TouchableIcon>

          <Text style={styles.text}>BOOK DETAIL</Text>
        </View>
      </NavbarContainer>

      <View style={styles.suggestions}>
        {suggestions.length > 0 ? (
          <FlatList
            horizontal={true}
            data={suggestions}
            keyExtractor={(x) => String(x.id)}
            renderItem={({item}) => (
              <SuggestionItem
                title={item.title}
                imageUrl={item.image_url}
                handlePress={() => setItem(item)}
              />
            )}
          />
        ) : (
          <Text style={{textAlign: 'center'}}>No suggestions avaible...</Text>
        )}
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 20,
                justifyContent: 'space-evenly',
              }}>
              <Image
                source={{
                  uri:
                    item?.image_url === null
                      ? 'https://cdn2.iconfinder.com/data/icons/books-16/27/books011-512.png'
                      : item.image_url,
                }}
                style={{width: 90, height: 130}}
              />
              <View style={{flexShrink: 1}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={{color: colors.LIGHTGREY}}>{item.author}</Text>
                <Text style={{color: colors.LIGHTGREY}}>{item.year}</Text>
                <Text style={{color: colors.LIGHTGREY}}>{item.genre}</Text>
                <Text style={{color: colors.LIGHTGREY}}>{item.title}</Text>
              </View>
            </View>

            <View style={styles.containerButtons}>
              <TouchableOpacity
                onPress={() => alert('adding to wishlist')}
                style={styles.wishlist}>
                <Text style={[styles.fontBtn, {color: colors.LIGHTBLUE}]}>
                  ADD TO WISHLIST
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert('await transaction')}
                style={styles.addCart}>
                <Text style={[styles.fontBtn, {color: colors.WHITE}]}>
                  RENT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.comentaryBox}>
          {
            item.comments ?
            item.comments.map((x, y) => {
              return(
                <View style={{flexDirection: 'row', padding: 10}} key={`comment+${y}`}>
                  <Image
                    source={require('../../assets/general/img_user1.png')}
                    style={{width: 50, height: 50}}
                  />
                  <View style={{flexShrink: 1, marginHorizontal: 5}}>
                    <Text style={{fontWeight: 'bold'}}>{x.user.name}</Text>
                  <Text style={{color: colors.LIGHTGREY}}>{x.comment}</Text>
                  </View>
                </View>
              )
            }) : <Text style={{textAlign: 'center'}}>No comments avaible...</Text>
          }
          {item.comments && <Button title="View All" onPress={() => {}} />}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    width: 270,
  },
  text: {
    color: colors.WHITE,
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.SWEET_LIGHTBLUE,
  },
  card: {
    backgroundColor: colors.WHITE,
    width: Dimensions.get('window').width - 70,
    height: Dimensions.get('window').height - 475,
    marginVertical: 15,
  },
  comentaryBox: {
    backgroundColor: colors.WHITE,
    width: Dimensions.get('window').width - 70,
    marginVertical: 15,
  },
  containerButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlist: {
    backgroundColor: colors.WHITE,
    height: 50,
    width: '80%',
    borderColor: colors.PASTEL_LIGHTBLUE,
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
  },
  addCart: {
    backgroundColor: colors.LIGHTBLUE,
    height: 50,
    width: '80%',
    borderColor: colors.WHITE,
    borderWidth: 4,
    borderRadius: 25,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  fontBtn: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  suggestions: {
    marginVertical: 10,
  },
});
