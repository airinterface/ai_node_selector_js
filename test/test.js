( function(){
  function testAll(){
    QUnit.test("Node Selector", function(assert){
      window.$ai = com.ai.NodeSelector.$ai;
      var el  = $ai("#test");
      assert.ok( ( el.length == 1 ) , 'find node' );
      var liNodes = el.findNodes("li")
      assert.ok( ( liNodes.length == 3 ) , 'find child node' );

      assert.ok( ( el.is("#test") == true ), 'is function');
      
      el  = $ai('.testFromHere')
      var res1 = el.containsOrSelfMatches('li', false );
      assert.ok( ( res1.length == 2 ), 'matches self  and subdirectory');
      var res2 = el.containsOrSelfMatches('li', true );
      assert.ok( ( res2.length == 1 ), 'matches self only');
      
    });
  };
  testAll();
}).call(this);