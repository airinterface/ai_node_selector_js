( function(){
  function testAll(){
    QUnit.test("Node Selector", function(assert){
      window.$ai = com.ai.NodeSelector.$ai;
      var el  = $ai("#test");
      assert.ok( ( el.length == 1 ) , 'find node' );
      var liNodes = el.findNodes("li")
      assert.ok( ( liNodes.length == 2 ) , 'find child node' );

      assert.ok( ( el.is("#test") == true ), 'is function');
    });
  };
  testAll();
}).call(this);