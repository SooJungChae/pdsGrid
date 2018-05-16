(function() {
  console.log('core');

  // core 에서는 위젯을 전체적으로 관리한다.
  $.fn.pdsGrid = function(a) {
    console.log(a);

    // view 에서 pdsGrid 속성 값이 있으면, 그 값으로 setting 해줘야 한다.
    var gridInstance = pbf.pds._pdsGrid.prototype.getInstance();
    if (a) {
      pbf.extend(gridInstance, a);
    }

    // pbf.pds 에 widget 을 만든다.
    pbf.pds._pdsGrid.prototype.makeWidget(gridInstance);

  };

  // 프레임워크를 만든다.
  var pdsBaseFramework = window.pdsBaseFramework = window.jQuery;
  var pbf = pdsBaseFramework;

  pbf.prototype.pds = function() {
  };

  (function(pbf) {
    pbf.pds = pbf.pds || {};
    window.pds = pbf.pds;

    pbf.pds.define = function(pbf, widgetType) {
      pbf.pds[widgetType] = function() {};
      // grid 에 있는 prototype 가져오기
    }

    pbf.pds.addHandler = function(pbf) {
      console.log(window);
    }

    // pbf.pds.makeWidget = function() {
    //   console.log(this.prototype);
    // }

    pbf.pds.pdsWidget = function(widgetType) {
      this.define(pbf, "_" + widgetType);

      if (!window["_" + widgetType]) {
        console.log(pbf.pds["_" + widgetType]);

        // var w = pbf.pds["_" + widgetType].prototype.defineInstance();
        //
        // pbf.extend(w, pbf.pds["_" + widgetType].prototype.makeWidget());
        //
        // pbf.each(w, function(z, y) {
        //   console.log(z, y)
        // });

        pbf.pds["_" + widgetType].prototype.addHandler = function(pbf) {
          pbf.pds.addHandler()
        }
      }


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
