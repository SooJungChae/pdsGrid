// pbf = b
(function (pbf) {
  console.log('grid')

  pbf.pds.pdsWidget("pdsGrid");

  console.log(pbf.pds._pdsGrid)

  pbf.extend(pbf.pds._pdsGrid.prototype, {
      defineInstance: function () {
        var d = {
          width: 600,
          height: 400,
          rowheight: 28, // rowsheight
          disabled: false,
          editable: false,
          editmode: "selectedcell",
          pagesize: 10,
          columnsheight: 30,
          totalcolumns: [],
          pageable: false,
          pagerbuttonscount: 5,
          groupable: false,
          sortable: false,
          filterable: false,
          filtermode: "default",
          altrows: false,
          showrowdetailscolumn: true,
          toolbarheight: 34,
          showstatusbar: false,
          statusbarheight: 34,
          groups: [],
          groupsrenderer: null,
          groupcolumnrenderer: null,
          pagerrenderer: null,
          columns: [],
          selectedrowindex: -1,
          selectedrowindexes: new Array(),
          selectedcells: new Array(),
          autobind: true,
          selectedcell: null,
          tableZIndex: 79,
          headerZIndex: 29,
          updatefilterconditions: null,
          showgroupaggregates: false,
          showaggregates: false,
          showfilterrow: false,
          showeverpresentrow: false,
          everpresentrowposition: "top",
          everpresentrowactions: "add reset",
          everpresentrowactionsmode: "buttons",
          everpresentrowheight: 30,
          autorowheight: false,
          autokoupdates: true,
          handlekeyboardnavigation: null,
          showsortmenuitems: true,
          showfiltermenuitems: true,
          showgroupmenuitems: true,
          enablebrowserselection: false,
          enablekeyboarddelete: true,
          clipboard: true,
          clipboardbegin: null,
          clipboardend: null,
          copytoclipboardwithheaders: false,
          copytoclipboardhiddencolumns: false,
          ready: null,
          updatefilterpanel: null,
          autogeneratecolumns: false,
          rowdetailstemplate: null,
          scrollfeedback: null,
          rendertoolbar: null,
          renderstatusbar: null,
          rendered: null,
          multipleselectionbegins: null,
          columngroups: null,
          cellhover: null,
          source: {
            beforeprocessing: null,
            beforesend: null,
            loaderror: null,
            localdata: null,
            data: null,
            datatype: "array",
            datafields: [],
            url: "",
            root: "",
            record: "",
            id: "",
            totalrecords: 0,
            recordstartindex: 0,
            recordendindex: 0,
            loadallrecords: true,
            sortcolumn: null,
            sortdirection: null,
            sort: null,
            filter: null,
            sortcomparer: null
          },
          filter: null,
          dataview: null,
          updatedelay: null,
          autoheight: false,
          autowidth: false,
          showheader: true,
          showgroupsheader: true,
          closeablegroups: true,
          scrollbarsize: b.jqx.utilities.scrollBarSize,
          touchscrollbarsize: b.jqx.utilities.touchScrollBarSize,
          scrollbarautoshow: b.jqx.utilities.scrollBarAutoShow,
          virtualmode: false,
          sort: null,
          columnsmenu: true,
          columnsresize: false,
          columnsautoresize: true,
          columnsreorder: false,
          columnsmenuwidth: 15,
          autoshowcolumnsmenubutton: true,
          popupwidth: "auto",
          popupheight: "auto",
          columnmenuopening: null,
          columnmenuclosing: null,
          sorttogglestates: 2,
          rendergridrows: null,
          enableanimations: true,
          enablecolumnsvirtualization: true,
          enabletooltips: false,
          selectionmode: "singlerow",
          enablehover: true,
          loadingerrormessage: "The data is still loading. When the data binding is completed, the Grid raises the 'bindingcomplete' event. Call this function in the 'bindingcomplete' event handler.",
          verticalscrollbarstep: 30,
          verticalscrollbarlargestep: 400,
          horizontalscrollbarstep: 10,
          horizontalscrollbarlargestep: 50,
          keyboardnavigation: true,
          keyboardmenunavigation: true,
          touchModeStyle: "auto",
          autoshowloadelement: true,
          showdefaultloadelement: true,
          showemptyrow: true,
          autosavestate: false,
          autoloadstate: false,
          _updating: false,
          _pagescache: new Array(),
          _pageviews: new Array(),
          _cellscache: new Array(),
          _rowdetailscache: new Array(),
          _rowdetailselementscache: new Array(),
          _requiresupdate: false,
          _hasOpenedMenu: false,
          scrollmode: "physical",
          deferreddatafields: null,
          menuitemsarray: [],
          events: ["initialized", "rowClick", "rowSelect", "rowUnselect", "groupExpand", "groupCollapse", "sort", "columnClick", "cellClick", "pageChanged", "pageSizeChanged", "bindingComplete", "groupsChanged", "filter", "columnResized", "cellSelect", "cellUnselect", "cellBeginEdit", "cellEndEdit", "cellValueChanged", "rowExpand", "rowCollapse", "rowDoubleClick", "cellDoubleClick", "columnReordered", "pageChanging"]
        };
        if (this === pbf.pds._pdsGrid.prototype) {
          return d
        }
        pbf.extend(true, this, d);
        return d
      },
      createInstance: function (i) {
        this.that = this;
        // var h = this;
        // h.pagesize
      }
  })

return;
// that = d
// data = e
  function c(that, data) {
    this.owner = that;
    this.datafield = null;
		this.displayfield = null;
		this.text = "";
		this.createfilterpanel = null;
		this.sortable = true;
		this.hideable = true;
		this.editable = true;
		this.hidden = false;
		this.groupable = true;
		this.renderer = null;
		this.cellsrenderer = null;
		this.checkchange = null,
		this.threestatecheckbox = false;
		this.buttonclick = null,
		this.columntype = null;
		this.cellsformat = "";
		this.align = "left";
		this.cellsalign = "left";
		this.width = "auto";
		this.minwidth = 25;
		this.maxwidth = "auto";
		this.pinned = false;
		this.visibleindex = -1;
		this.filterable = true;
		this.filter = null;
		this.filteritems = [];
		this.resizable = true;
		this.initeditor = null;
		this.createeditor = null;
		this.createwidget = null;
		this.initwidget = null;
		this.destroywidget = null;
		this.destroyeditor = null;
		this.geteditorvalue = null;
		this.validation = null;
		this.classname = "";
		this.cellclassname = "";
		this.cellendedit = null;
		this.cellbeginedit = null;
		this.cellvaluechanging = null;
		this.aggregates = null;
		this.aggregatesrenderer = null;
		this.menu = true;
		this.createfilterwidget = null;
		this.filtertype = "default";
		this.filtercondition = null;
		this.rendered = null;
		this.exportable = true;
		this.exporting = false;
		this.draggable = true;
		this.nullable = true;
		this.clipboard = true;
		this.enabletooltips = true;
		this.columngroup = null;
		this.filterdelay = 800;
		this.reseteverpresentrowwidgetvalue = null;
		this.geteverpresentrowwidgetvalue = null;
		this.createeverpresentrowwidget = null;
		this.initeverpresentrowwidget = null;
		this.validateeverpresentrowwidgetvalue = null;
		this.destroyeverpresentrowwidget = null;
		this.getcolumnproperties = function () {
			return {
				nullable: this.nullable,
				sortable: this.sortable,
				hideable: this.hideable,
				hidden: this.hidden,
				groupable: this.groupable,
				width: this.width,
				align: this.align,
				editable: this.editable,
				minwidth: this.minwidth,
				maxwidth: this.maxwidth,
				resizable: this.resizable,
				datafield: this.datafield,
				text: this.text,
				exportable: this.exportable,
				cellsalign: this.cellsalign,
				pinned: this.pinned,
				cellsformat: this.cellsformat,
				columntype: this.columntype,
				classname: this.classname,
				cellclassname: this.cellclassname,
				menu: this.menu
			}
		},
		this.setproperty = function (f, g) {
			if (this[f]) {
				var h = this[f];
				this[f] = g;
				this.owner._columnPropertyChanged(this, f, g, h)
			} else {
				if (this[f.toLowerCase()]) {
					var h = this[f.toLowerCase()];
					this[f.toLowerCase()] = g;
					this.owner._columnPropertyChanged(this, f.toLowerCase(), g, h)
				}
			}
		};
		this._initfields = function (g) {
			if (g != null) {
				var f = this.that;
				if (b.jqx.hasProperty(g, "dataField")) {
					this.datafield = b.jqx.get(g, "dataField")
				}
				if (b.jqx.hasProperty(g, "displayField")) {
					this.displayfield = b.jqx.get(g, "displayField")
				} else {
					this.displayfield = this.datafield
				}
				if (b.jqx.hasProperty(g, "enableTooltips")) {
					this.enabletooltips = b.jqx.get(g, "enableTooltips")
				}
				if (b.jqx.hasProperty(g, "text")) {
					this.text = b.jqx.get(g, "text")
				} else {
					this.text = this.displayfield
				}
				if (b.jqx.hasProperty(g, "createfilterpanel")) {
					this.createfilterpanel = b.jqx.get(g, "createfilterpanel")
				}
				if (b.jqx.hasProperty(g, "sortable")) {
					this.sortable = b.jqx.get(g, "sortable")
				}
				if (b.jqx.hasProperty(g, "hideable")) {
					this.hideable = b.jqx.get(g, "hideable")
				}
				if (b.jqx.hasProperty(g, "hidden")) {
					this.hidden = b.jqx.get(g, "hidden")
				}
				if (b.jqx.hasProperty(g, "groupable")) {
					this.groupable = b.jqx.get(g, "groupable")
				}
				if (b.jqx.hasProperty(g, "renderer")) {
					this.renderer = b.jqx.get(g, "renderer")
				}
				if (b.jqx.hasProperty(g, "align")) {
					this.align = b.jqx.get(g, "align")
				}
				if (b.jqx.hasProperty(g, "cellsAlign")) {
					this.cellsalign = b.jqx.get(g, "cellsAlign")
				}
				if (b.jqx.hasProperty(g, "clipboard")) {
					this.clipboard = b.jqx.get(g, "clipboard")
				}
				if (b.jqx.hasProperty(g, "cellsFormat")) {
					this.cellsformat = b.jqx.get(g, "cellsFormat")
				}
				if (b.jqx.hasProperty(g, "width")) {
					this.width = b.jqx.get(g, "width")
				}
				if (b.jqx.hasProperty(g, "minWidth")) {
					this.minwidth = parseInt(b.jqx.get(g, "minWidth"));
					if (isNaN(this.minwidth)) {
						this.minwidth = 25
					}
				}
				if (b.jqx.hasProperty(g, "maxWidth")) {
					this.maxwidth = parseInt(b.jqx.get(g, "maxWidth"));
					if (isNaN(this.maxwidth)) {
						this.maxwidth = "auto"
					}
				}
				if (b.jqx.hasProperty(g, "cellsRenderer")) {
					this.cellsrenderer = b.jqx.get(g, "cellsRenderer")
				} else {
					if (g.cellsRenderer) {
						this.cellsrenderer = g.cellsRenderer
					}
				}
				if (b.jqx.hasProperty(g, "columnType")) {
					this.columntype = b.jqx.get(g, "columnType")
				}
				if (b.jqx.hasProperty(g, "checkChange")) {
					this.checkchange = b.jqx.get(g, "checkChange")
				}
				if (b.jqx.hasProperty(g, "buttonClick")) {
					this.buttonclick = b.jqx.get(g, "buttonClick")
				} else {
					if (g.buttonClick) {
						this.buttonclick = g.buttonClick
					}
				}
				if (b.jqx.hasProperty(g, "pinned")) {
					this.pinned = b.jqx.get(g, "pinned")
				}
				if (b.jqx.hasProperty(g, "visibleIndex")) {
					this.visibleindex = b.jqx.get(g, "visibleIndex")
				}
				if (b.jqx.hasProperty(g, "filterable")) {
					this.filterable = b.jqx.get(g, "filterable")
				}
				if (b.jqx.hasProperty(g, "filter")) {
					this.filter = b.jqx.get(g, "filter")
				}
				if (b.jqx.hasProperty(g, "resizable")) {
					this.resizable = b.jqx.get(g, "resizable")
				}
				if (b.jqx.hasProperty(g, "editable")) {
					this.editable = b.jqx.get(g, "editable")
				}
				if (b.jqx.hasProperty(g, "initEditor")) {
					this.initeditor = b.jqx.get(g, "initEditor")
				} else {
					if (g.initEditor) {
						this.initeditor = g.initEditor
					}
				}
				if (b.jqx.hasProperty(g, "createEditor")) {
					this.createeditor = b.jqx.get(g, "createEditor")
				} else {
					if (g.createEditor) {
						this.createeditor = g.createEditor
					}
				}
				if (b.jqx.hasProperty(g, "initWidget")) {
					this.initwidget = b.jqx.get(g, "initWidget")
				} else {
					if (g.initWidget) {
						this.initwidget = g.initWidget
					}
				}
				if (b.jqx.hasProperty(g, "createWidget")) {
					this.createwidget = b.jqx.get(g, "createWidget")
				} else {
					if (g.createWidget) {
						this.createwidget = g.createWidget
					}
				}
				if (b.jqx.hasProperty(g, "destroyWidget")) {
					this.destroywidget = b.jqx.get(g, "destroyWidget")
				} else {
					if (g.destroyWidget) {
						this.destroywidget = g.destroyWidget
					}
				}
				if (b.jqx.hasProperty(g, "reseteverpresentrowwidgetvalue") || b.jqx.hasFunction(g, "reseteverpresentrowwidgetvalue")) {
					this.reseteverpresentrowwidgetvalue = b.jqx.get(g, "reseteverpresentrowwidgetvalue")
				} else {
					if (g.resetEverPresentRowWidgetValue) {
						this.reseteverpresentrowwidgetvalue = g.resetEverPresentRowWidgetValue
					}
				}
				if (b.jqx.hasProperty(g, "geteverpresentrowwidgetvalue") || b.jqx.hasFunction(g, "geteverpresentrowwidgetvalue")) {
					this.geteverpresentrowwidgetvalue = b.jqx.get(g, "geteverpresentrowwidgetvalue")
				} else {
					if (g.getEverPresentRowWidgetValue) {
						this.geteverpresentrowwidgetvalue = g.getEverPresentRowWidgetValue
					}
				}
				if (b.jqx.hasProperty(g, "createeverpresentrowwidget") || b.jqx.hasFunction(g, "createeverpresentrowwidget")) {
					this.createeverpresentrowwidget = b.jqx.get(g, "createeverpresentrowwidget")
				} else {
					if (g.createEverPresentRowWidget) {
						this.createeverpresentrowwidget = g.createEverPresentRowWidget
					}
				}
				if (b.jqx.hasProperty(g, "initeverpresentrowwidget") || b.jqx.hasFunction(g, "initeverpresentrowwidget")) {
					this.initeverpresentrowwidget = b.jqx.get(g, "initeverpresentrowwidget")
				} else {
					if (g.initEverPresentRowWidget) {
						this.initeverpresentrowwidget = g.initEverPresentRowWidget
					}
				}
				if (b.jqx.hasProperty(g, "validateeverpresentrowwidgetvalue")) {
					this.validateeverpresentrowwidgetvalue = b.jqx.get(g, "validateeverpresentrowwidgetvalue")
				} else {
					if (g.validateEverPresentRowWidgetValue) {
						this.validateeverpresentrowwidgetvalue = g.validateEverPresentRowWidgetValue
					}
				}
				if (b.jqx.hasProperty(g, "destroyeverpresentrowwidget") || b.jqx.hasFunction(g, "destroyeverpresentrowwidget")) {
					this.destroyeverpresentrowwidget = b.jqx.get(g, "destroyeverpresentrowwidget")
				} else {
					if (g.destroyEverPresentRowWidget) {
						this.destroyEverPresentRowWidget = g.destroyEverPresentRowWidget
					}
				}
				if (b.jqx.hasProperty(g, "destroyEditor")) {
					this.destroyeditor = b.jqx.get(g, "destroyEditor")
				} else {
					if (g.destroyEditor) {
						this.destroyeditor = g.destroyEditor
					}
				}
				if (b.jqx.hasProperty(g, "getEditorValue")) {
					this.geteditorvalue = b.jqx.get(g, "getEditorValue")
				} else {
					if (g.getEditorValue) {
						this.geteditorvalue = g.getEditorValue
					}
				}
				if (b.jqx.hasProperty(g, "validation")) {
					this.validation = b.jqx.get(g, "validation")
				} else {
					if (g.validation) {
						this.validation = g.validation
					}
				}
				if (b.jqx.hasProperty(g, "cellBeginEdit")) {
					this.cellbeginedit = b.jqx.get(g, "cellBeginEdit")
				} else {
					if (g.cellBeginEdit) {
						this.cellbeginedit = g.cellBeginEdit
					}
				}
				if (b.jqx.hasProperty(g, "cellEndEdit")) {
					this.cellendedit = b.jqx.get(g, "cellEndEdit")
				} else {
					if (g.cellEndEdit) {
						this.cellendedit = g.cellEndEdit
					}
				}
				if (b.jqx.hasProperty(g, "className")) {
					this.classname = b.jqx.get(g, "className")
				}
				if (b.jqx.hasProperty(g, "cellClassName")) {
					this.cellclassname = b.jqx.get(g, "cellClassName")
				} else {
					if (g.cellClassName) {
						this.cellclassname = g.cellClassName
					}
				}
				if (b.jqx.hasProperty(g, "menu")) {
					this.menu = b.jqx.get(g, "menu")
				}
				if (b.jqx.hasProperty(g, "aggregates")) {
					this.aggregates = b.jqx.get(g, "aggregates")
				}
				if (b.jqx.hasProperty(g, "aggregatesRenderer")) {
					this.aggregatesrenderer = b.jqx.get(g, "aggregatesRenderer")
				}
				if (b.jqx.hasProperty(g, "createFilterWidget")) {
					this.createfilterwidget = b.jqx.get(g, "createFilterWidget")
				}
				if (b.jqx.hasProperty(g, "filterType")) {
					this.filtertype = b.jqx.get(g, "filterType")
				}
				if (b.jqx.hasProperty(g, "filterDelay")) {
					this.filterdelay = b.jqx.get(g, "filterDelay")
				}
				if (b.jqx.hasProperty(g, "rendered")) {
					this.rendered = b.jqx.get(g, "rendered")
				}
				if (b.jqx.hasProperty(g, "exportable")) {
					this.exportable = b.jqx.get(g, "exportable")
				}
				if (b.jqx.hasProperty(g, "filterItems")) {
					this.filteritems = b.jqx.get(g, "filterItems")
				}
				if (b.jqx.hasProperty(g, "cellValueChanging")) {
					this.cellvaluechanging = b.jqx.get(g, "cellValueChanging")
				}
				if (b.jqx.hasProperty(g, "draggable")) {
					this.draggable = b.jqx.get(g, "draggable")
				}
				if (b.jqx.hasProperty(g, "filterCondition")) {
					this.filtercondition = b.jqx.get(g, "filterCondition")
				}
				if (b.jqx.hasProperty(g, "threeStateCheckbox")) {
					this.threestatecheckbox = b.jqx.get(g, "threeStateCheckbox")
				}
				if (b.jqx.hasProperty(g, "nullable")) {
					this.nullable = b.jqx.get(g, "nullable")
				}
				if (b.jqx.hasProperty(g, "columnGroup")) {
					this.columngroup = b.jqx.get(g, "columnGroup")
				}
				if (!g instanceof String && !(typeof g == "string")) {
					for (var h in g) {
						if (!f.hasOwnProperty(h)) {
							if (!f.hasOwnProperty(h.toLowerCase())) {
								d.host.remove();
								throw new Error("jqxGrid: Invalid property name - " + h + ".")
							}
						}
					}
				}
			}
		};
		this._initfields(e);
		return this
  }
})(pdsBaseFramework);
