/*
pdsWidgets v1.0.0 (2018-05)
https://m.blog.naver.com/PostView.nhn?blogId=jjoommnn&logNo=130141474121&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F
*/

var oldBrowser = document.all && !document.addEventListener;
if (!oldBrowser) {
  (function(w) {
    var doc = w.document,
        // e = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        $ = function(a, b) {
          return new $.fn.init(bv, bw, doc)
        };

    // list 가 뭐하는 건지 모르겠음.
    // w.PDSLite = w.pdsHelper = $;

    // if (typeof define === "function") {
    //     define("pds", [], function() {
    //         return $
    //     })
    // }
  })(window)
}

// PDSLite.generateID = function() {
//   var a = function() {
//     return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
//   };
//   var b = "";
//   do {
//     b = "jqx" + a()
//   } while ($("#" + b).length > 0);
//   return b;
// };

// pbf = a
// t = g

// framework 를 만드는 곳.
var pdsBaseFramework = window.pdsBaseFramework = window.minQuery || window.jQuery;

(function(pbf) {
  pbf.pds = pbf.pds || {};
  window.pds = pbf.pds;

  // widget 타입 별 framework 를 정의한다.
  pbf.pds.define = function(pbf_pds, widget_type) {
    pbf_pds[widget_type] = function() {
    //   if (this.baseType) {
    //     this.base = new pbf_pds[this.baseType]();
    //     this.base.defineInstance();
    //   }
       // this.defineInstance();
    }

    // function 의 프로포타입을 만드네...?
    pbf_pds[widget_type].prototype.base = null;
    pbf_pds[widget_type].prototype.baseType = undefined;
    pbf_pds[widget_type].prototype.defineInstance = function() {};
  }

  pbf.pds.applyWidget = function(pbf_pds, widget_type) {
    var l = widget_type;
    console.log('createinstance');
  }

  // widgetType = b
  // = c
  // = f
  // wt = g
  // jqxWidget("jqxGrid", "", {});
  // pbf.pds.pdsWidget = function(widget_type, c, f) {
  // 위젯의 속성을 가져온다.
  pbf.pds.pdsWidget = function(widget_type) {
    var j = false;
    var wt = widget_type;

    pbf.pds.define(pbf.pds, "_" + wt);
    return;

    // var l = "";
    //
    // if (c) {
    //   l = "_" + c;
    // }




    // if (!window[wt]) {
    //   var o = pbf(e);
    //   pdb.each(o, function(v) {
    //     var x = o[v];
    //     pbf.pds.applyWidget(item, g, m, undefined);
    //   })
    // }

    pbf.pds["_" + wt].prototype.createInstance = function() {};

    pbf.pds.applyWidget(pbf.pds["_" + wt]);

    // pbf.pds["_" + wt].prototype.addEventHandler = function(m, e) {
    //   this.host.on(m, e);
    // };
  }
})(pdsBaseFramework);
