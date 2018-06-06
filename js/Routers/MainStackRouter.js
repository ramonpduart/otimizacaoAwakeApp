import React, { Component } from "react";
import Login from "../components/login/";
import Home from "../components/home/";
import BlankPage from "../components/blankPage";
import Resultado from "../components/resultado";
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Resultado: { screen: Resultado },
  BlankPage: { screen: BlankPage }
}));
