import React from 'react';
import {View, Text, ImageBackground, Dimensions, TextInput} from 'react-native';
import {Form, Item, Label, Input, Button} from 'native-base';


var backimg = require('../assets/landing.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;


class SignIn extends React.Component{

	state={
		email:"",
		password:""
	}

	logIn = () =>{

	}

	render(){
		return(
			<View>
				<ImageBackground
					source = {backimg}
					style = {styles.background}
				>
				</ImageBackground>

				<View style={styles.inputStyle}>
					<Form>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input
								style={{}}
								autoCorrect={false}
								onChangeText={(e)=>this.setState({email:e})}
							/>
						</Item>

						<Item floatingLabel>
							<Label>Password</Label> 
							<Input 
								style={{}}
								autoCorrect={false}
								onChangeText={(p)=>this.setState({password:p})}
								value={this.state.password}
								secureTextEntry
							/>
						</Item>
					</Form>
					<View style={{marginTop:40}}>
						<Button
							primary
							block
							onPress={this.logIn}
						>
							<Text style={{color:'white'}}>SignIn/SignUp</Text>
						</Button>
					</View>
				</View>

			</View>
		)
	}
}


const styles={
	background:{
		flex:1,
		resizeMode:'cover',
		height:height,
		width:width
	},
	inputStyle:{
		marginTop:200,
		margin:10
	}
}


export default SignIn;