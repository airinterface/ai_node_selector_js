( function(){
  window.$ai = com.ai.NodeSelector.$ai;
  function testAll(){
    QUnit.test("Node Selector", function(assert){
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

    QUnit.test("Node Selector parsing", function(assert){
      var str = "#a[b=234]";
      
      assert.ok( com.ai.NodeSelector.parseSelector( str ) == "#a[b='234']", "returns valid selector");

      var str2   = "#a[b=\"234\"] .test [c = 234 ] [d]";
      var result = "#a[b=\"234\"] .test [c = '234' ] [d]";
      assert.ok( com.ai.NodeSelector.parseSelector(  str2  ) == result, "returns valid selector");

      var nodeList = $ai('[test_attr=1]');
      assert.ok( nodeList.length == 1, "correct attribute and return result");
      
    });
  };
  testAll();
}).call(this);