// core 에서는 위젯을 전체적으로 관리한다.
(function() {
  console.log('core');

  // 프레임워크를 만든다.
  var pdsBaseFramework = window.pdsBaseFramework = window.jQuery;
  var pbf = pdsBaseFramework;

  // pbf 프레임워크에 pds
  pbf.prototype.pds = function() {
  };

  // pdsGrid 가 호출되면 호출된 property 값으로 기존 값을 바꿔준다.
  $.fn.pdsGrid = function(a) {
    console.log(a);
    console.log('[core] pdsGrid 호출');
    return;

    // pdsgrid 의 instance 를 새로운 것으로 바꿔준다.
    pbf.pds._pdsGrid.prototype.setInstance(a);

    // 그리드를 만들어준다.
    pbf.pds._pdsGrid.prototype.makeWidget();

    // 이벤트 핸들러를 생성한다.
    pbf.pds._pdsGrid.prototype.addHandlers();




    console.log(pbf);


    // view 에서 pdsGrid 속성 값이 있으면, 그 값으로 setting 해준다.
    var gridInstance = pbf.pds._pdsGrid.prototype.getInstance();


    if (a) {
      pbf.extend(gridInstance, a);
    }

    // pbf.pds 에 widget 을 만든다.
    pbf.pds._pdsGrid.prototype.makeWidget(gridInstance);

  };

  (function(pbf) {
    pbf.pds = pbf.pds || {};
    window.pds = pbf.pds;
    console.log('pbf pds 추가');
    pbf.pds.define = function(widgetType) {
      console.log('define '+ widgetType);

      pbf.pds[widgetType] = function() {};
      // grid 에 있는 prototype 가져오기
    }

    pbf.pds.addHandler = function(pbf) {
      console.log('add?')
      console.log(window);
    }

    // pbf.pds.makeWidget = function() {
    //   console.log(this.prototype);
    // }

    pbf.pds.pdsWidget = function(widgetType) {

      if (!window["_" + widgetType]) {
        console.log('init pdsWidget');

        this.define("_" + widgetType);

        // var w = pbf.pds["_" + widgetType].prototype.defineInstance();
        //
        // pbf.extend(w, pbf.pds["_" + widgetType].prototype.makeWidget());
        //
        // pbf.each(w, function(z, y) {
        //   console.log(z, y)
        // });
      }

      // pbf.pds["_" + widgetType].prototype.addHandler = function(pbf) {
      //
      //   // pbf.pds.addHandler()
      // }

      // switch(widgetType) {
      //   case "pdsGrid":
      //     this._pdsGrid.makeWidget();
      //     break;
      //   default:
      //     this._pdsGrid.makeWidget();
      //     break;
      // }
    };

  })(pdsBaseFramework);

})()
