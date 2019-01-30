/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*! ai_node_selector - v1.0.0 - 
2019-01-30 

*/'use strict';
( function(){
    var NodeSelector = com.ai.AObject.extends({
        __name__      : "NodeSelector",
        nodeLists     : null,
        length        : 0,
        constructor: function( selector ) {
          this.nodeList = [];
          if( selector instanceof Node  ){
            this.nodeList.push( selector );
          } else {
            this.nodeList = Array.from(document.querySelectorAll( selector ));
          }
          this.length = this.nodeList.length;
        },

        /**
         * return original node selection is empty or not. 
         * @return     {boolean}  True if empty, False otherwise.
         */
        isEmpty: function(){
          return this.nodeList.length == 0;
        },
  
        /**
         * get the actual HTML node or list of node
         * if index is not defined
         *
         * @param      {integer}  index   The index
         */
        get: function( index ){
          var res = this.nodeList;
          if( !isNaN(index) ) {
            if( this.nodeList.length > index ) {
              res = this.nodeList[ index ];
            } else {
              res = null;
            }
          }
          return res;
        },

        /**
         * ths method will return the object representing the first element in
         *  the document that matches the specified set of CSS selectors, 
         *  or null is returned if there are no matches.
         *
         * @param      {String}  selector  The selector
         * @return     {DOMNode}  {return the dom node.}
         */
        findNode: function( selector ){
          var res = null;
          if( !this.isEmpty() ) {
            this.nodeList.forEach( function( node ){
              let _node = node.querySelector( selector );
              if( _node != null ) {
                res = _node; 
                break;
              }
            });
          }
          return res;
        },
        
        findNodes: function( selector ) {
          var res = [];
          if( !this.isEmpty() ) {
            this.nodeList.forEach( function( node ) {
              let _nodeList = node.querySelectorAll( selector );
              if( _nodeList.length > 0 ){
                _nodeList.forEach( function(_node ){
                  res.push(_node);
                });
              }
            });
          }
          return res;
        },

        find: function( selector ){
          var res = null;
          let el = this.findNode(selectors);
          if( el != null ){
            res = new NodeSelector( el );
          }
          return res;
        },
        /**
         * returns the node that matches selector. 
         * 
         * @param      {String}   selector  The selector
         * @param      {boolean}  selfOnly  check against current node or false for 
         *                        when you want to include descendant. 
         * @return     {Array}    array of matched node.
         */
        containsOrSelfMatches: function( selector, selfOnly=false ){
          var res = [];
          let _nodeList = this.nodeList;
          if( _nodeList.length > 0 ){
            var f   = document.createDocumentFragment();
            for( var _i = 0; _i < _nodeList.length; _i++ ){
              let _node    = _nodeList[ _i ];
              let _nodeTmp = _node.cloneNode( !selfOnly );
              f.appendChild( _nodeTmp );
              let _tmpElList  = f.querySelectorAll( selector );
              if( _tmpElList.length > 0 ){
                _tmpElList.forEach( function( node ){
                  res.push(node);
                }.bind(this));
              }
              f.removeChild( _nodeTmp );
            }
            f = null;
          }
          return res;
        },

        /* if nodeList length is more than 1 
        */
        is: function( selector ){
          var res       = false;
          if( this.nodeList.length > 0 ){
            let matchList = this.containsOrSelfMatches( selector, true );
            res = ( matchList.length == this.nodeList.length );
          }
          return res;
        },

        findAll: function( selector ){
          var res = [];
          let list = this.findNodes(selectors);
          if( list.length > 0  ){
            if( list.length > 0 ){
              list.forEach( function(_node){
                res.push[ new NodeSelector( _node ) ];
              });
            }
          }
          return res;
        },

      },
      {
        $ai: function( selector_or_node  ) {
          var ainode = selector_or_node; 
          if( !( selector_or_node instanceof NodeSelector ) ) {
            ainode = new NodeSelector( selector_or_node );
          }
          return ainode;
        }
      });
  this.NodeSelector = NodeSelector;
}).call( com.ai );
  


/*** EXPORTS FROM exports-loader ***/
exports["com"] = (com);
}.call(window));

/***/ })
/******/ ]);