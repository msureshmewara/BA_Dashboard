import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import Styles from './../Style/Style'

export default class ProgressBar extends Component {
    render() {
        return (
            <View style={Styles.progressBarStyle}>
            
                <Progress.Bar progress={this.props.passedProgressVal} width={200}/>
            
                <Text style={Styles.progressBarText}>{ (this.props.passedProgressVal)* 100}%</Text>
            
            </View>
        );
    }
}
