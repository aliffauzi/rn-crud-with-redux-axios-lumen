import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Input, Button } from '../../component'
import axios from 'axios';
import { URL_API } from '../../utils';
class EditScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.route.params.data.title,
            desc: this.props.route.params.data.desc,
        }
        
    }

    componentDidMount(){
        console.log(this.state.navigation);
    }
    sendData = () => {
        console.log(this.state);
        const {navigation} = this.props;
        const id =  this.props.route.params.id;
        axios.post(URL_API + '/updatenotes/' + id, this.state)
            .then(function (response) {
                Alert.alert(
                    'Berhasil',
                    'Berhasil Mengubah Catatan',
                    [
                        {
                            text: "OK",
                            onPress : () => navigation.replace('Home')
                        }
                    ]
                );
            })
            .catch(function (error) {
                console.log(error)
            })
        console.log('ok');
    }
    render() {
        
        return (
            <View style={styles.container}>
                <Input placeholder="Masukan Judul"
                    value={this.state.title}
                    onChangeText={(value) => this.setState({title:value})}
                />
                <View style={{height:20}} />
                <Input placeholder="Masukan Deskripsi"
                    value={this.state.desc}
                    onChangeText={(value) => this.setState({desc:value})}
                />
                <View style={{height:20}} />
                <Button title="simpan bos" onPress={() => this.sendData()} />
            </View>
        )
    }
}
styles = {
    container: {
        padding: 20,
        flex: 1,
    },
};
export default EditScreen
