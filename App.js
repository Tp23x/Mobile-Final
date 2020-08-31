import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import StaffScreen from './pages/StaffScreen';
import SearchStaff from './pages/SearchStaff';
import MenuCustomer from './pages/MenuCustomer';
import MenuPackage from './pages/MenuPackage';
import MenuBook from './pages/MenuBook';
import MenuMore from './pages/MenuMore';
import MapEbus from './pages/MapEbus';
import Cyh from './pages/Cyh';
import Me from './pages/Me';
import Package from './pages/Package';
import Sensor from './pages/Sensor';
import Chart from './pages/Chart';
const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    Settings:{ screen: SettingsScreen},
    Package: { screen: MenuPackage },
    PackageR: { screen: Package },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#008B8B',
      },
      headerTintColor: '#FFFFFF',
      title: 'WU Tour ',
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#008B8B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
);
const StaffStack = createStackNavigator(
  {
    Staff: { screen: StaffScreen },
    Search: { screen: SearchStaff },
    
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#008B8B',
      },
      headerTintColor: '#FFFFFF',
      title: 'ข้อมูลของพนักงาน',
    },
  }
);
const SearchStack = createStackNavigator(
  {
    Search: { screen: SearchStaff },
    
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#008B8B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
);
const MenuCusStack = createStackNavigator(
  {
    Customer: { screen: MenuCustomer }, 
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#CD5C5C',
      },
      headerTintColor: '#FFFFFF',
      title: 'ข้อมูลลูกค้า',
    },
  }
);
const MenuPacStack = createStackNavigator(
  {
    PackageR: { screen: Package },  
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#228B22',
      },
      headerTintColor: '#FFFFFF',
      title: 'ข้อมูลแพ็คเกจ',
    },
  }
);
const MenuBookStack = createStackNavigator(
  {
    Booking: { screen: MenuPackage }, 
    Monny: { screen: Chart}, 
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#CD853F',
      },
      headerTintColor: '#FFFFFF',
      title: 'ข้อมูลการจอง',
    },
  }
);
const MenuMoreStack = createStackNavigator(
  {
    More: { screen: MenuMore },
    Map: { screen: MapEbus},
    SensorRandome: { screen: Sensor},
    CYH: { screen: Cyh},
    Pawarin: { screen: Me},  
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#8B658B',
      },
      headerTintColor: '#FFFFFF',
      title: 'เมนูพิเศษ',
    },
  }
);
const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    //Settings: { screen: SettingsStack },
    Staff: { screen: StaffStack },
    //Search: { screen: SearchStack },
    Customer: { screen: MenuCusStack },
    Package: { screen: MenuPacStack },
    Booking: { screen: MenuBookStack },
    More: { screen: MenuMoreStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } 
         if (routeName === 'Settings') {
          iconName = `ios-checkmark-circle`;
        }
        if (routeName === 'Staff') {
          iconName = `ios-contact`;
        }
        if (routeName === 'Search') {
          iconName = `ios-search`;
        }
        if (routeName === 'Customer') {
          iconName = `ios-contacts`;
        }
        if (routeName === 'Package') {
          iconName = `ios-basket`;
        }
        if (routeName === 'Booking') {
          iconName = `ios-cart`;
        }
        if (routeName === 'More') {
          iconName = `ios-gift`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00868B',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);