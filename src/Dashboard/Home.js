import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import styles from './../Style/Style';
import ListItem from './../Component/ListItem';
import DashBoardHeader from './../Component/DashBoardHeader'
import ProgressBar from './../Component/ProgressBar'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        }
    }
    renderListItem(data) {
        return (<ListItem
            passedVal = {data}
        />)
    }


  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <DashBoardHeader/>
            </View>
            <View>
            <FlatList
                data={[{title: 'Meditation', details: 'Meditation for a total of 15 hours', progress: '0.6', imageSrc: require('./../images/meditation.png')}, 
                {title: 'Chant', details: 'Chant for a total of 2 hours', progress: '0.2', imageSrc: require('./../images/chant.png')},
                {title: 'Kindness', details: 'Perform RAKs & earn 100 points', progress: '0.9', imageSrc: require('./../images/kindness.png')},
                {title: 'Mindfulness', details: 'Assess yourself on mindfulness', progress: '0.3', imageSrc: require('./../images/mindfullness.png')}]}
                renderItem={this.renderListItem.bind(this)}
                />
            </View>
        </SafeAreaView>
      
    );
  }
}

