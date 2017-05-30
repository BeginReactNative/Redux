import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../actions'

class Student extends Component {

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.props.fetchData}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
                <View style={styles.mainContent}>
                    {
                        this.props.data.isFetching && <Text>Loading</Text>
                    }
                    {
                        this.props.data.data.length ? (
                            this.props.data.data.map((person, i) => {
                                return <View key={i} >
                                    <Text>Name: {person.name} - Age: {person.edu}</Text>
                                    
                                </View>
                            })
                        ) : null
                    }
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        height: 50,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
        borderRadius: 10

    },
  mainContent: {
    margin: 10,
  }
})
const mapStateToProps = (state) => {
    console.log('AAAA');
    console.log(state);
    return {
        data: state.fetchReducers
    }
}
export default connect(mapStateToProps, { fetchData })(Student)