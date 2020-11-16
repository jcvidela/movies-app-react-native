import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

import {NavbarContainer} from '../components/index';
import {colors} from '../styles/colors';

import {TouchableIcon, SearchBar, ListItem} from '../components/index';

export default ({navigation}) => {
  const [search, setSearch] = React.useState(false);
  const [list, setList] = React.useState({
    error: null,
    data: [],
    fullData: []
  });

  React.useEffect(() => {
      let books = navigation.getParam('list');
      setList({
        ...list,
        ['data']: books,
        ['fullData']: books,
      })
  }, [navigation])

  const filter = (text, list) => list.filter(x => x.title.toLowerCase().includes(text))

  const handleSearch = text => {
    let formatQuery = text.toLowerCase();

    let filtered = filter(formatQuery, list.fullData);

    setList({
      ...list,
      ['data']: filtered
    })
  }

  return (
    <>
      <NavbarContainer>
        <View style={styles.row}>
          <TouchableIcon handlePress={() => {}}>
            <Image source={require('../../assets/navigationbar/ic_notifications.png')} />
          </TouchableIcon>

          {search ? 
            <SearchBar handleChange={handleSearch} /> : 
            <Text style={styles.text}>LIBRARY</Text>
          }

          <TouchableIcon handlePress={() => setSearch(!search)}>
            <Image source={require('../../assets/navigationbar/ic_search.png')} />
          </TouchableIcon>
        </View>
      </NavbarContainer>

      <FlatList 
        data={list.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ListItem 
            title={item.title}
            imageUrl={item.image_url}
            desc={item.author}
            handlePress={() => navigation.push('Detail', {item, data: list.data})}
          />
        )}
      />
      
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  text: {
    color: colors.WHITE,
    fontSize: 20,
  },
});
