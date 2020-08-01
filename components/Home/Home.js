import React, { Component } from 'react';
import { Text, View,Button} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    
    static navigationOptions = {
        title: 'Home'
    }

    render(){
        const navigate = this.props.navigation.navigate;

        return(
            <View style={{padding:20}}>
                <Text >Hello World!</Text>
                <View style={{ marginTop:20, width:200}}>
                    <Button
                        title="Go to Another page"
                        onPress={() =>
                            navigate('NewPage', { name: 'Jane' })
                        }
                    />
                </View>
            </View>
        );

    }
}

export default Home;