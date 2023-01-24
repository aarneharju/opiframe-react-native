import { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';

const ShoppingForm = (props) => {

	const [state, setState] = useState({
		type: "",
		count: "",
		price: ""
	})

	const addToList = () => {
		let item = {
			...state,
			id: 0
		}
		props.addToList(item);
		setState({
			type: "",
			count: "",
			price: ""
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={[styles.text, styles.label]}>Type:</Text>
				<TextInput style={[styles.text, styles.input]}
					onChangeText={(text) => {
						setState((state) => {
							return {
								...state,
								type: text
							}
						})
					}} value={state.type} />
			</View>
			<View style={styles.row}>
				<Text style={[styles.text, styles.label]}>Count:</Text>
				<TextInput style={[styles.text, styles.input]}
					onChangeText={(text) => {
						setState((state) => {
							return {
								...state,
								count: text
							}
						})
					}} value={state.count} inputMode="numeric" />
			</View>
			<View style={styles.row}>
				<Text style={[styles.text, styles.label]}>Price:</Text>
				<TextInput style={[styles.text, styles.input]}
					onChangeText={(text) => {
						setState((state) => {
							return {
								...state,
								price: text
							}
						})
					}} value={state.price} inputMode="numeric" />
			</View >
			<View style={[styles.row, styles.buttonRow]}>
				<Pressable style={styles.addButton}
					onPress={addToList}>
					<Text style={styles.text}>Add</Text>
				</Pressable>
			</View>
		</View >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	row: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	buttonRow: {
		justifyContent: "center"
	},
	addButton: {
		height: 80,
		width: 110,
		backgroundColor: "blue",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontFamily: "sans-serif",
		fontSize: 18
	},
	label: {
		fontWeight: "bold"
	},
	input: {
		width: 200,
		backgroundColor: "lightgreen"
	}
})

export default ShoppingForm;