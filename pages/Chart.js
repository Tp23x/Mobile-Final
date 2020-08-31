import 'babel-polyfill'
import React from 'react'
import {ScrollView, StatusBar, Dimensions, Text} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import FlashMessage, {showMessage} from 'react-native-flash-message'
import LineChart from './src/line-chart'
import PieChart from './src/pie-chart'
import ProgressChart from './src/progress-chart'
import BarChart from './src/bar-chart'
import StackedBarChart from './src/stackedbar-chart'
import ContributionGraph from './src/contribution-graph'
import {
  data,
  contributionData,
  pieChartData,
  progressChartData,
  stackedBarGraphData
} from './data'

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#022173',
    backgroundGradientFrom: '#022173',
    backgroundGradientTo: '#1b3fa0',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
  },
  {
    backgroundColor: '#26872a',
    backgroundGradientFrom: '#43a047',
    backgroundGradientTo: '#66bb6a',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#000000',
    backgroundGradientTo: '#000000',
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
  },
  {
    backgroundColor: '#0091EA',
    backgroundGradientFrom: '#0091EA',
    backgroundGradientTo: '#0091EA',
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
  },
  {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#b90602',
    backgroundGradientFrom: '#e53935',
    backgroundGradientTo: '#ef5350',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#ff3e03',
    backgroundGradientFrom: '#ff3e03',
    backgroundGradientTo: '#ff3e03',
    color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
  }
]

export default class App extends React.Component {
  renderTabBar() {
    return <StatusBar hidden />
  }

  render() {
    const {width} = Dimensions.get('window')
    const height = 220
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
          }
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor
              }}
            >
              <Text style={labelStyle}>รายจ่ายแพ็คเกจ</Text>
              <LineChart
                bezier
                data={data}
                width={width}
                height={height}
                yAxisLabel="$"
                chartConfig={chartConfig}
                style={graphStyle}
                onDataPointClick={({value, getColor}) =>
                  showMessage({
                    message: `${value}`,
                    description: 'You selected this value',
                    backgroundColor: getColor(0.9)
                  })
                }
              />
           
              
             
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }
}


/*
//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
 
export default class DetailsScreen extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}*/
