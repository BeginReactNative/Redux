import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from '../src/store/configureStore';
import Students from '../src/components/Student';
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                   <Students />
                </View>
            </Provider>

        );
    }
}

export default App;