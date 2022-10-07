process.env.NODE_ENV = 'test';


module.exports = function () {

  return {

    files: [

      "**/*.js",

      "!**/*.spec.js",

      "!**/node_modules/**"

    ],


    tests: ["test/unit/**/*.spec.js", "app/**/*.spec.js"],


    env: {

      type: "node",

    },

  };

};
