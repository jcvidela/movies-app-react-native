import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../redux/reducers/books/actions';

import {Loader} from '../components/index';

const Home = ({navigation, data, fetchBooks}) => {
  const [list, setList] = React.useState([]);

  // give me those books
  React.useEffect(() => {
    let isMounted = true;
    
    isMounted && fetchBooks();
    return () => isMounted = false;
  }, []);

  // listen data and update state
  React.useEffect(() => {
    setList([]);
    setList(data);
  }, [data])

  // There are books? let's sail there
  React.useEffect(() => {
    (() => {
      if (list.length > 0) navigation.navigate('Books', {list});
    })();
  }, [list]);

  return <Loader />;
};

const mapStateToProps = (state) => {
  return {data: state.books.books};
};

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
