'use strict';
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


        /* if nodeList length is more than 1 
        */
        is: function( selector ){
          var res = false;
          let _nodeList = this.nodeList;
          if( _nodeList.length > 0 ){
            var f   = document.createDocumentFragment();
            res     = true;
            for( var _i = 0; _i < _nodeList.length; _i++ ){
              let _node    = _nodeList[ _i ];
              let _nodeTmp = _node.cloneNode();
              f.appendChild( _nodeTmp );
              let _tmpEl   = f.querySelector( selector );
              if( _tmpEl == null ){
                res = false;
              }
              f.removeChild( _nodeTmp );
              if( res == false ) {
                break;
              }
            }
            f = null;
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
  
