import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../redux/reducers/books/actions';
import {View, Text} from 'react-native';
import {Loader} from '../components/index';

const Home = ({navigation, data, fetchBooks}) => {
  const [list, setList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  let isMounted = React.useRef(true);

  // give me those books
  React.useEffect(() => {
    isMounted.current && fetchBooks();
    return () => isMounted.current = false;
  }, []);

  // listen data and update state
  React.useEffect(() => {
    setList([]);
    setList(data);

    setTimeout(() => {
      if(!list.length > 0) {
        setIsLoading(false)
      }
    }, 4000);
  }, [data])

  // There are books? let's sail there
  React.useEffect(() => {
    (() => {
      if (list.length > 0) navigation.navigate('Books', {list});
    })();
  }, [list]);

  return (
    <>
      {
        isLoading ? <Loader /> : 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center'}}>No books avaible</Text>
        </View>
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {data: state.books.books};
};

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
