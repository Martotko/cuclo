import {
	StyleSheet,
} from "react-native";
import { AppVariables } from "../../AppStyles";

export default StyleSheet.create({
	playerContainer: {
		width: "100%",
		height: "100%",
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: "center",
		backgroundColor: AppVariables.colorBackground
	},
	playerCover: {
		width: "80%",
		height: "40%",
		marginTop: 30,
	},
	playerTitle: {
		marginVertical: 20,
		color: AppVariables.colorPrimaryText,
		fontSize: AppVariables.fontSizeLight * 3,
		textAlign: 'center'
	},
	playerArtist: {
		marginBottom: 20,
		color: AppVariables.colorPrimaryText,
		fontSize: AppVariables.fontSizeLight * 2,
		textAlign: 'center'
	},
	controls: {
		marginVertical: 20,
		flexDirection: "row"
	},
	description: {
		width: "80%",
		marginTop: 20,
		textAlign: "center"
	},
	player: {
		marginTop: 40
	},
	state: {
		marginTop: 20
	}
});