// pdsgrid 만을 다룬다.
// 프레임워크를 사용해서 pdsgrid 를 만든다.
(function(pbf) {
  console.log('grid')

  // pbf.pds 에 pdsGrid 를 만든다.
  pbf.pds.pdsWidget("pdsGrid");

  // pbf.extend(pbf.pds._pdsGrid.prototype, {
  //   defineInstance: function() {
  //     var defaultValue = {
  //       width: 250,
  //       height: 300
  //     }
  //     return defaultValue;
  //   },
  //   makeWidget: function() {
  //     var g = "<p>test</p>";
  //     document.getElementById("test").innerHTML(g);
  //       //console.log('make')
  //       // https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67
  //   }
  // });

  var col = 0;

  // 일단! 그리드를 만들어보자.
  var defaultValue = {
        width: 250,
        height: 300,
        columns: [{
          text: "",
          columntype: "default",
          celltype: "string",
          align: "left",
          dbcolumnname: ""
        }],
        source: null,
        placeholder: ""
  }

  pbf.pds._pdsGrid.prototype.getInstance = function() {
    return defaultValue;
  };

  function isHtmlElement(obj) {
    return (typeof obj === "object") &&
      (obj.nodeType === 1)
  }
  pbf.pds._pdsGrid.prototype.makeWidget = function(gridInstance) {
      var ins = gridInstance;
      var tr = document.createElement("tr");
      var th = document.createElement("th");
      var td = document.createElement("td");

      var gridwrap = document.createElement("div");
      gridwrap.className = "pdsGridWrap";
      gridwrap.style.width = ins.width + "px";
      gridwrap.style.height = ins.height + "px";

      var grid = document.createElement("table");
      grid.className = "pdsGrid";

      // column & row 만들기
      var columnnames = [];

      // 헤더 만들기
      for (var i = 0; i < ins.columns.length; i++) {
        th = document.createElement("th");
        th.innerHTML = ins.columns[i].text;
        columnnames.push(ins.columns[i].text);

        if (ins.columns[i].width) {
           th.width = ins.columns[i].width;
        }

        tr.appendChild(th);
        grid.appendChild(tr);

        col++;
      }

      // 컨텐츠 만들기
      var sourceData = this.getDataFromSource(ins.source);
      var rowData = this.columnToRow(gridInstance.columns, sourceData);

      for (var i = 0; i < rowData.length; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < rowData[i].length; j ++) {
          td = document.createElement("td");

          // column 별로 style 적용한다.
          this.columnStyle(td, ins.columns[j], rowData[i][j]);

          // if (isHtmlElement(this.columnStyle(ins.columns[j], rowData[i][j]))) {
          //   appendChild(this.columnStyle(td, ins.columns[j], rowData[i][j]));
          // }
          // else {
          //   innerHTML = this.columnStyle(td, ins.columns[j], rowData[i][j]);
          // }
          tr.appendChild(td);
        }
        grid.appendChild(tr);
      }

      gridwrap.appendChild(grid);

      document.getElementById("pdsGrid").appendChild(gridwrap);

      // var frag = document.createDocumentFragment();
      // var grid_head = "<tr><th></th></tr>";
      // var e = document.createElement("table");
      // e.innerHTML = grid_head;
      // e.className = "pdsGrid";
      //frag.appendChild(e);
  }

  pbf.pds._pdsGrid.prototype.columnStyle = function(td, column, value) {
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

  pbf.pds._pdsGrid.prototype.columnToRow = function(gridColumns, gridSource) {

    // 컬럼에서 columnname 의 인덱스를 찾는다.
    var cols = [];
    var source = gridSource;
    var getColumns = gridColumns.map(function(obj) {
      cols.push(obj.text);
    });

    var maxrow = 0;
    var newArr = [];

    for (var item in source) {
      if (maxrow < source[item].length) maxrow = source[item].length;
    }

    // row 2차원 배열 만들기
    for (var i = 0; i < maxrow; i++) {
      newArr[i] = [];
    }

    // columnname 인덱스에 source 를 위치시킨다.
    var colName = "";
    var placeholder = this.getInstance().placeholder;

    for (var col = 0; col < cols.length; col++) {
      colName = cols[col];

      for (var row = 0; row < maxrow; row++) {
          if (source[cols[col]]) {
            newArr[row][cols.indexOf(colName)] = (source[colName][row]) ? source[colName][row] : placeholder;
          }
          else {
            newArr[row][col] = placeholder;
          }
      }
    }

    return newArr;
  }

  pbf.pds._pdsGrid.prototype.getDataFromSource = function(source) {
    var arr = [];

    for (var i = 0; i < source.length; i++) {
      arr[source[i].columnname] = source[i].data
    }
    return arr;
  }

  function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
  }

  function searchStringInArray (str, arr) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j].match(str)) return j;
    }
    return -1;
  }

})(pdsBaseFramework);
