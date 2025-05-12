import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";

export default antfu({
	stylistic: {
		indent: "tab",
		quotes: "double",
		semi: true,
		overrides: {
			"style/array-bracket-newline": ["warn", "consistent"],
			"style/array-bracket-spacing": ["warn", "never", { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
			"style/array-element-newline": ["warn", "consistent", { multiline: true, minItems: 6 }],
			"style/arrow-parens": ["warn", "as-needed", { requireForBlockBody: false }],
			"style/comma-dangle": ["warn", "never"]
		}
	},
	lessOpinionated: true,
	typescript: {
		overrides: {
			"unused-imports/no-unused-vars": "off",
			"no-console": ["warn", { allow: ["info", "warn", "error"] }]
		}
	},
	formatters: true,
	react: true
}, {
	plugins: {
		"@next/next": nextPlugin
	}
});
