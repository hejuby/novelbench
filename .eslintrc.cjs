require("@marshallku/eslint-config/patch");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "next/core-web-vitals",
        "next/typescript",
        "@marshallku/eslint-config",
        "@marshallku/eslint-config/mixins/react",
    ],
    settings: {
        react: {
            version: "18.2",
        },
    },
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
};
