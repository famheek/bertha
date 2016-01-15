System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "app/bootstrap.js": [
      "github:angular/bower-angular@1.4.8",
      "app/main.js"
    ],
    "github:angular/bower-angular@1.4.8": [
      "github:angular/bower-angular@1.4.8/angular"
    ],
    "app/main.js": [
      "github:angular/bower-angular@1.4.8",
      "github:angular/bower-material@1.0.1",
      "github:angular/bower-angular-route@1.4.8",
      "github:firebase/angularfire@1.1.3",
      "npm:moment@2.11.1",
      "app/controllers/dashboard.js",
      "app/controllers/welcome.js",
      "app/controllers/admin.js",
      "app/directives/dashboard.js",
      "app/directives/notification.js",
      "templates/dashboard.html!github:systemjs/plugin-text@0.0.4",
      "templates/admin.html!github:systemjs/plugin-text@0.0.4",
      "templates/welcome.html!github:systemjs/plugin-text@0.0.4",
      "npm:font-awesome@4.5.0/css/font-awesome.min.css!github:systemjs/plugin-css@0.1.20",
      "github:angular/bower-material@1.0.1/angular-material.css!github:systemjs/plugin-css@0.1.20",
      "style/app.css!github:systemjs/plugin-css@0.1.20",
      "style/welcome.css!github:systemjs/plugin-css@0.1.20",
      "style/dashboard.css!github:systemjs/plugin-css@0.1.20",
      "style/admin.css!github:systemjs/plugin-css@0.1.20"
    ],
    "github:angular/bower-material@1.0.1": [
      "github:angular/bower-material@1.0.1/index"
    ],
    "github:firebase/angularfire@1.1.3": [
      "github:firebase/angularfire@1.1.3/index"
    ],
    "github:angular/bower-angular-route@1.4.8": [
      "github:angular/bower-angular-route@1.4.8/angular-route"
    ],
    "app/controllers/dashboard.js": [
      "npm:babel-runtime@5.8.34/helpers/class-call-check"
    ],
    "npm:moment@2.11.1": [
      "npm:moment@2.11.1/moment"
    ],
    "app/controllers/welcome.js": [
      "npm:babel-runtime@5.8.34/helpers/class-call-check",
      "lib/firebase.js",
      "app/dialogs/overviewDialog.js",
      "app/dialogs/signUpDialog.js"
    ],
    "app/directives/dashboard.js": [
      "npm:babel-runtime@5.8.34/helpers/sliced-to-array",
      "app/directives/dashboard.html!github:systemjs/plugin-text@0.0.4"
    ],
    "app/controllers/admin.js": [
      "npm:babel-runtime@5.8.34/helpers/class-call-check",
      "lib/firebase.js"
    ],
    "app/directives/notification.js": [
      "app/directives/notification.html!github:systemjs/plugin-text@0.0.4",
      "style/notification.css!github:systemjs/plugin-css@0.1.20"
    ],
    "github:angular/bower-material@1.0.1/index": [
      "github:angular/bower-angular@1.4.8",
      "github:angular/bower-angular-animate@1.4.8",
      "github:angular/bower-angular-aria@1.4.8",
      "github:angular/bower-material@1.0.1/angular-material"
    ],
    "app/dialogs/overviewDialog.js": [
      "lib/firebase.js"
    ],
    "app/dialogs/signUpDialog.js": [
      "lib/firebase.js"
    ],
    "github:firebase/angularfire@1.1.3/index": [
      "github:firebase/angularfire@1.1.3/dist/angularfire"
    ],
    "github:angular/bower-angular-route@1.4.8/angular-route": [
      "github:angular/bower-angular@1.4.8"
    ],
    "lib/firebase.js": [
      "github:firebase/firebase-bower@2.3.2"
    ],
    "npm:babel-runtime@5.8.34/helpers/sliced-to-array": [
      "npm:babel-runtime@5.8.34/core-js/get-iterator",
      "npm:babel-runtime@5.8.34/core-js/is-iterable"
    ],
    "github:angular/bower-angular-aria@1.4.8": [
      "github:angular/bower-angular-aria@1.4.8/angular-aria"
    ],
    "github:firebase/firebase-bower@2.3.2": [
      "github:firebase/firebase-bower@2.3.2/firebase"
    ],
    "github:angular/bower-angular-animate@1.4.8": [
      "github:angular/bower-angular-animate@1.4.8/angular-animate"
    ],
    "npm:babel-runtime@5.8.34/core-js/get-iterator": [
      "npm:core-js@1.2.6/library/fn/get-iterator"
    ],
    "npm:babel-runtime@5.8.34/core-js/is-iterable": [
      "npm:core-js@1.2.6/library/fn/is-iterable"
    ],
    "github:angular/bower-angular-aria@1.4.8/angular-aria": [
      "github:angular/bower-angular@1.4.8"
    ],
    "npm:core-js@1.2.6/library/fn/get-iterator": [
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/core.get-iterator"
    ],
    "github:angular/bower-angular-animate@1.4.8/angular-animate": [
      "github:angular/bower-angular@1.4.8"
    ],
    "npm:core-js@1.2.6/library/fn/is-iterable": [
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/core.is-iterable"
    ],
    "npm:core-js@1.2.6/library/modules/es6.string.iterator": [
      "npm:core-js@1.2.6/library/modules/$.string-at",
      "npm:core-js@1.2.6/library/modules/$.iter-define"
    ],
    "npm:core-js@1.2.6/library/modules/web.dom.iterable": [
      "npm:core-js@1.2.6/library/modules/es6.array.iterator",
      "npm:core-js@1.2.6/library/modules/$.iterators"
    ],
    "npm:core-js@1.2.6/library/modules/core.get-iterator": [
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/core.is-iterable": [
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-define": [
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.redefine",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.iter-create",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.string-at": [
      "npm:core-js@1.2.6/library/modules/$.to-integer",
      "npm:core-js@1.2.6/library/modules/$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/es6.array.iterator": [
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/library/modules/$.iter-step",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.iter-define"
    ],
    "npm:core-js@1.2.6/library/modules/core.get-iterator-method": [
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/$.an-object": [
      "npm:core-js@1.2.6/library/modules/$.is-object"
    ],
    "npm:core-js@1.2.6/library/modules/$.classof": [
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.wks": [
      "npm:core-js@1.2.6/library/modules/$.shared",
      "npm:core-js@1.2.6/library/modules/$.uid",
      "npm:core-js@1.2.6/library/modules/$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.hide": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.descriptors"
    ],
    "npm:core-js@1.2.6/library/modules/$.redefine": [
      "npm:core-js@1.2.6/library/modules/$.hide"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-to-string-tag": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.export": [
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$.ctx"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-create": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-iobject": [
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.shared": [
      "npm:core-js@1.2.6/library/modules/$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.descriptors": [
      "npm:core-js@1.2.6/library/modules/$.fails"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx": [
      "npm:core-js@1.2.6/library/modules/$.a-function"
    ],
    "npm:core-js@1.2.6/library/modules/$.iobject": [
      "npm:core-js@1.2.6/library/modules/$.cof"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "angular-material": "github:angular/bower-material@1.0.1",
    "angular-route": "github:angular/bower-angular-route@1.4.8",
    "angularfire": "github:firebase/angularfire@1.1.3",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "clean-css": "npm:clean-css@3.4.9",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "firebase": "github:firebase/firebase-bower@2.3.2",
    "font-awesome": "npm:font-awesome@4.5.0",
    "html": "github:systemjs/plugin-text@0.0.4",
    "moment": "npm:moment@2.11.1",
    "github:angular/bower-angular-animate@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-aria@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-route@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-material@1.0.1": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-animate": "github:angular/bower-angular-animate@1.4.8",
      "angular-aria": "github:angular/bower-angular-aria@1.4.8",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.11.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
