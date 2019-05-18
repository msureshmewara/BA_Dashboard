import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Styles from './../Style/Style';
import ProgressBar from './ProgressBar'
export default class DashBoardHeader extends Component<Props> {
    render() {
        return (
            <View style={Styles.dashBoardHeaderImage}>
                <Image style= {Styles.dashboardHeaderImage} source={require('./../images/kindness.png')}/>
                <Text style= {Styles.dashboardHeaderImageText}>Novice</Text>
                <ProgressBar passedProgressVal = {0.2}/>
            </View>
        )
    }
}