import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class IWeb extends Component {
  render() {
    return (
	<WebView
        source={{uri: 'https://www.wu.ac.th/th/campuslife/13754/%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2-%E0%B8%A1%E0%B8%A7%E0%B8%A5.-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%96'}}
        style={{marginTop: 20}}
      />
    );
  }
}