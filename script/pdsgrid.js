/**
 * pdsGrid jQuery Plugin
 *
 * This plugin makes html grid.
 *
 * Author : SooJungChae
 * Create : 2018-05-29
 * Version : 0.0.0
**/

// Slidizle 참고하기~
(function(){

  function pdsGrid(options) {


    // 빈 function 을 만들면 호출할 때 있는지 없는지 체크할 필요가 없다.
    this.settings = {
      columns : {},
      rowselect : function() {}
    };

    this.init(options);
    console.log('init');
  };

  pdsGrid.prototype.init = function(options) {
    var _this = this;

    // Merge default options and new options
    _this.extendSettings(options);

    _this.addHandlers(_this.settings);
  }

  pdsGrid.prototype.extendSettings = function(options) {
    this.settings = $.extend({}, this.settings, options);
  }

  pdsGrid.prototype.makeWidget = function($this, options) {
    var _this = this;
    var ins = options;

    var tr = document.createElement("tr");
    var th = document.createElement("th");
    var td = document.createElement("td");

    var gridwrap = document.createElement("div");
    gridwrap.className = "pdsGridWrap";
    gridwrap.style.width = ins.width + "px";
    gridwrap.style.height = ins.height + "px";

    var grid = document.createElement("table");
    grid.className = "pdsGrid";

    // Make column & row
    if (ins.columns) {
      var columnnames = [];

      // Make header
      for (var i = 0; i < ins.columns.length; i++) {
        th = document.createElement("th");
        th.innerHTML = ins.columns[i].text;
        columnnames.push(ins.columns[i].text);

        if (ins.columns[i].width) {
           th.width = ins.columns[i].width;
        }

        tr.appendChild(th);
        grid.appendChild(tr);
      }

      // Make Contents
      if (ins.source) {
        var sourceData = _this.getDataFromSource(ins.source);
        var rowData = _this.columnToRow(ins.columns, sourceData);

        for (var i = 0; i < rowData.length; i++) {
          tr = document.createElement("tr");

          for (var j = 0; j < rowData[i].length; j ++) {
            td = document.createElement("td");

            _this.columnStyle(td, ins.columns[j], rowData[i][j]);

            tr.appendChild(td);
          }
          grid.appendChild(tr);
        }
      }
    }
    gridwrap.appendChild(grid);
    $this[0].appendChild(gridwrap);
  }

  pdsGrid.prototype.getDataFromSource = function(source) {
    var arr = [];

    for (var i = 0; i < source.length; i++) {
      arr[source[i].columnname] = source[i].data
    }
    return arr;
  }

  pdsGrid.prototype.columnToRow = function(gridColumns, gridSource) {

    var colname = "",
        source = "";
    var newRow = [];

    // add null if no data in the cell
    // so you need maxlength of source
    var maxRow = 0;
    for (var item in gridSource) {
      if (maxRow < gridSource[item].length)
        maxRow = gridSource[item].length;
    }

    for (var colIdx in gridColumns) {
      colname = gridColumns[colIdx].text;
      source = gridSource[colname];

      for (var sourceIdx = 0; sourceIdx < maxRow; sourceIdx ++){

        // make dimensional array
        if (colIdx == 0)
          newRow[sourceIdx] = [];

        newRow[sourceIdx][colIdx] = source[sourceIdx] ? source[sourceIdx] : "";
      }
    }
    return newRow;
  }


  pdsGrid.prototype.columnStyle = function(td, column, value) {
    var obj = value;

    if (column.type) {
      switch(column.type) {
        case "dropdown":
          break;
        case "radiobutton":
          obj = "<input type='radio' />";
          break;
        case "checkbox":
          obj = "<input type='checkbox' />";
          break;
        case "textbox":
          obj = document.createElement("input");
          obj.className = "pdsTextbox";
          obj.type = "text";
          obj.value = value;
          //obj = "<input class='pdsTextbox' type='text' value='" + value + "' />";
          break;
        case "default":
        default :
          break;
      }
    }

    if (isHtmlElement(obj)) {
      td.appendChild(obj);

      // 데이터 정렬
      if (column.align) {
        obj.style.textAlign = column.align;
      }
    }
    else {
      td.innerHTML = obj;

      // 데이터 정렬
      if (column.align) {
        td.style.textAlign = column.align;
      }
    }
  }

  pdsGrid.prototype.addHandlers = function(settings) {

  }

  function isHtmlElement(obj) {
    return (typeof obj === "object") &&
      (obj.nodeType === 1)
  }


  /*
   * Add jQuery plugin
  */
  $.fn.pdsGrid = function(options) {
    console.log('pdsGrid');
    var $this = this;

    // Draw grid on object
    pdsGrid.prototype.makeWidget($this, options);

    // Make pdsGrid instance
    var _pdsGrid = new pdsGrid(options);

    /* Init pdsGrid */
    _pdsGrid.init(options);

    /* Draw pdsGrid */
    _pdsGrid.makeWidget($this, options);
  };
})();

//
// (function(pbf){
//   var pdsGrid = (function(){
//     function pdsGrid() {
//       console.log('grid')
//     }
//
//     pdsGrid.prototype.makeWidget = function() {
//       console.log('makewidget')
//     }
//   })();
//
//   pbf.pds.pdsGrid = pdsGrid;
//   console.log(pbf.pds.pdsGrid);
// })(pdsBaseFramework);



// (function(pbf) {
//   console.log('grid');
//
//
//
//   pbf.pds.pdsGrid.prototype.makeWidget = function() {
//       // var ins = gridInstance;
//       var ins = this;
//       var tr = document.createElement("tr");
//       var th = document.createElement("th");
//       var td = document.createElement("td");
//
//       var gridwrap = document.createElement("div");
//       gridwrap.className = "pdsGridWrap";
//       gridwrap.style.width = ins.width + "px";
//       gridwrap.style.height = ins.height + "px";
//
//       var grid = document.createElement("table");
//       grid.className = "pdsGrid";
//
//       // column & row 만들기
//       var columnnames = [];
//
//       // 헤더 만들기
//       for (var i = 0; i < ins.columns.length; i++) {
//         th = document.createElement("th");
//         th.innerHTML = ins.columns[i].text;
//         columnnames.push(ins.columns[i].text);
//
//         if (ins.columns[i].width) {
//            th.width = ins.columns[i].width;
//         }
//
//         tr.appendChild(th);
//         grid.appendChild(tr);
//
//         col++;
//       }
//
//       // 컨텐츠 만들기
//       var sourceData = this.getDataFromSource(ins.source);
//       var rowData = this.columnToRow(ins.columns, sourceData);
//
//       for (var i = 0; i < rowData.length; i++) {
//         tr = document.createElement("tr");
//         for (var j = 0; j < rowData[i].length; j ++) {
//           td = document.createElement("td");
//
//           // column 별로 style 적용한다.
//           this.columnStyle(td, ins.columns[j], rowData[i][j]);
//
//           // if (isHtmlElement(this.columnStyle(ins.columns[j], rowData[i][j]))) {
//           //   appendChild(this.columnStyle(td, ins.columns[j], rowData[i][j]));
//           // }
//           // else {
//           //   innerHTML = this.columnStyle(td, ins.columns[j], rowData[i][j]);
//           // }
//           tr.appendChild(td);
//         }
//         grid.appendChild(tr);
//       }
//
//       gridwrap.appendChild(grid);
//
//       document.getElementById("pdsGrid").appendChild(gridwrap);
//
//       // var frag = document.createDocumentFragment();
//       // var grid_head = "<tr><th></th></tr>";
//       // var e = document.createElement("table");
//       // e.innerHTML = grid_head;
//       // e.className = "pdsGrid";
//       //frag.appendChild(e);
//   }
//
//
//   return;
//   // pbf.pds 에 pdsGrid 를 만든다.
//   pbf.pds.pdsWidget("pdsGrid");
//
//   // ***----------- pdsGrid 만의 method
//
//   var Events = [];
//
//   // 맨 처음 그리드가 만들어질 때 입력되는 default 값들
//   var defaultValue = {
//         width: 250,
//         height: 300,
//         columns: [{
//           text: "",
//           columntype: "default",
//           celltype: "string",
//           align: "left",
//           dbcolumnname: ""
//         }],
//         source: null,
//         placeholder: ""
//   }
//
//   pbf.pds._pdsGrid.prototype.getInstance = function() {
//     return defaultValue;
//   };
//
//   // defaultValue 값을 변경한다.
//   pbf.pds._pdsGrid.prototype.setInstance = function(a) {
//     //console.log(a);
//     //pbf.extend()
//     pbf.extend(pbf.pds._pdsGrid.prototype, a);
//   };
//

//
//     // row 2차원 배열 만들기
//     for (var i = 0; i < maxrow; i++) {
//       newArr[i] = [];
//     }
//
//     // columnname 인덱스에 source 를 위치시킨다.
//     var colName = "";
//     var placeholder = this.getInstance().placeholder;
//
//     for (var col = 0; col < cols.length; col++) {
//       colName = cols[col];
//
//       for (var row = 0; row < maxrow; row++) {
//           if (source[cols[col]]) {
//             newArr[row][cols.indexOf(colName)] = (source[colName][row]) ? source[colName][row] : placeholder;
//           }
//           else {
//             newArr[row][col] = placeholder;
//           }
//       }
//     }
//
//     return newArr;
//   }
//
//   pbf.pds._pdsGrid.prototype.getDataFromSource = function(source) {
//     var arr = [];
//
//     for (var i = 0; i < source.length; i++) {
//       arr[source[i].columnname] = source[i].data
//     }
//     return arr;
//   }
//
//   // addEvent().addEventHandler();
//   pbf.pds._pdsGrid.prototype.OnRowSelect = function(target) {
//     return target;
//   }
//
//   pbf.pds._pdsGrid.prototype.addEvent = function(event) {
//     this.events.push(event);
//   }
//   // rowselect (rowidx, cellvalue)
//   // 이런 extend 방식으로도 구현해보고 있음.
//   pbf.extend(pbf.pds._pdsGrid.prototype, {
//     addHandlers: function() {
//
//       console.log('add!')
//       // rowselect 를 한 후의 행동
//       if (this.rowselect) {
//         this.rowselect();
//       }
//
//       console.log(pbf.pds._pdsGrid.prototype);
//
//     },
//     begincelledit: function() {
//       console.log('begincelledit!')
//     },
//     // 그리드 row 를 클릭하면 event 발생한다.
//     rowselect: function(e) {
//     }
//   });
//   return;
//   //   makeWidget: function() {
//   //     var g = "<p>test</p>";
//   //     document.getElementById("test").innerHTML(g);
//   //       //console.log('make')
//   //       // https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67
//   //   }
//   // });
//
//   // 컬럼 갯수에 따라서 그리드를 만들어 줘야 해서 global 변수가 필요하다.
//   var col = 0;
//
//   // addHandlers 호출?
//   // begincelledit
//   pbf.pds._pdsGrid.prototype.begincelledit = function() {
//     console.log('begincelledit');
//     return "abc";
//   }
//
//   function createElementFromHTML(htmlString) {
//     var div = document.createElement('div');
//     div.innerHTML = htmlString.trim();
//
//     // Change this to div.childNodes to support multiple top-level nodes
//     return div.firstChild;
//   }
//
//   function searchStringInArray (str, arr) {
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j].match(str)) return j;
//     }
//     return -1;
//   }
//
// })(pdsBaseFramework);
