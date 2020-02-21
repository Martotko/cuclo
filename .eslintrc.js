module.exports = {
	extends: [
		"airbnb",
		"prettier",
		"prettier/react"
	],
	rules: {
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [
					".js",
					".jsx"
				]
			}
		],
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				singleQuote: true,
				printWidth: 100
			}
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	},
	plugins: [
		"prettier",
		"react-hooks"
	]
};


