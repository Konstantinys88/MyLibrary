module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"rules": {
		"indent": [
			"warn",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"warn",
			"double"
		],
		// "semi": [
		// 	"0",
		// 	"always"
		// ],
		"no-unused-vars": [
			"warn"
		]
	}
};


// Чтобы изменить серьезность правила, установите идентификатор правила равным одному из следующих значений:
// "off"или 0- отключить правило
// "warn"или 1- включить правило как предупреждение (не влияет на код выхода)
// "error"или 2- включить правило как ошибку (код выхода 1 при срабатывании)
