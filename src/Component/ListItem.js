import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ProgressBar from './ProgressBar'
import Styles from './../Style/Style'
export default class ListItem extends Component<Props> {
     render() {
      return (
        <TouchableOpacity >
        <View style={Styles.cardViewStyle}>
        <View>
            <Image style={Styles.cardViewImage} source= {this.props.passedVal.item.imageSrc}/>
          </View>
          <View style={Styles.listViewText}>
            <Text style={Styles.listTitleText}>{this.props.passedVal.item.title}</Text>
            <Text style={Styles.listDetailsText}>{this.props.passedVal.item.details}</Text>
            <ProgressBar passedProgressVal = {this.props.passedVal.item.progress}/>
          </View>
        </View>
          
        </TouchableOpacity>
      );
    }
  }