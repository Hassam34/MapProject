import React, {Component} from 'react';
import AppContainer from '../Navigating/Router'
import {View} from 'react-native'
import NetInfo from '@react-native-community/netinfo';


export default class  App extends Component{
    state = {
        isConnected: null,
        bool:true
    }
    componentDidMount(){
        NetInfo.isConnected.addEventListener('changeConnection', this._connectivityChange);
        NetInfo.isConnected.fetch().done((isConnected) => { this.setState({ isConnected }); })
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('changeConnection', this._connectivityChange);
    }

    _connectivityChange = (isConnected) => {
        this.setState({ isConnected });
    }
    renderApp(){
        if(this.state.bool){
            NetInfo.isConnected.fetch().done((isConnected) => {
                this.setState({ isConnected }, () => {
                    if (this.state.isConnected === true) {
                        console.log('Render')
                        this.setState({bool:false});                    }
                    if (this.state.isConnected === false) {
                        console.log(' No Render')
                        this.setState({bool:null});
                        return  alert('Try Again!!! No Connection Found')
                    }
                });
            })
        }
      
    }
    render(){
        console.disableYellowBox=true
        return( 
            <View style={{flex:1}}>
                {this.renderApp()}
                {this.state.bool==false
                &&
                <AppContainer/>
                }
            </View>
        
        )
    };  
};
const styles={
    spinnerStyle:{
        flex: 1,
        marginTop:240,
        justifyContent: 'center',
        alignItems:'center'
    }
}