( function(){
  function testAll(){
    QUnit.test("Example Test Category", function(assert){
      window.$ai = com.ai.NodeSelector.$ai;
      var el  = $ai("#test");
      assert.ok( ( el.length == 1 ) , 'find node' );
      var liNodes = el.findNodes("li")
      assert.ok( ( liNodes.length == 2 ) , 'find child node' );
    });
  };
  testAll();
}).call(this);