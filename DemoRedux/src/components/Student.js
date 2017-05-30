import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {fetchData} from '../actions'

class Student extends Component {
   
    render() {
      console.log(this.props);
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.props.fetchData}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        height: 50 ,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
        borderRadius: 10 
        
    },
    content: {

    }
})
const mapStateToProps=(state) => {
    console.log(state);
    return {
        data: state.fetchReducers
    }
}
export default connect(mapStateToProps,{fetchData})(Student)