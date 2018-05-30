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
    // If you make empty function,
    // you don't need to check that exists when you call function.
    this.settings = {
      columns : {},
      rowselect : function() {}
    };

    this.init(options);
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
    // ==== ???? 
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
