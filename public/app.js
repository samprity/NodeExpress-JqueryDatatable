var g_dataSet = {};
$.ajax({
    url: document.URL+"data/",
    type: "GET",
    dataType: "json",
    success: function (responseJson) {
      $('#example').DataTable( {
          data: responseJson,
          columnDefs: [
              {
                //name
                  render: function ( data, type, row ) {
                      return  row[0] + " " + row [6];
                  },
                  "width": "20%",
                  targets: 0
              },
              {
                //type
                  render: function ( data, type, row ) {
                      return  row[1]   ;
                  },
                  "width": "20%",
                  targets: 1
              },
              {
                //Issue
                  render: function ( data, type, row ) {
                      return  row[8] ;
                  },
                  "width": "20%",
                  targets: 2
              },
              {
                //Messages
                  render: function ( data, type, row ) {
                      return  row[9] ;
                  },
                  "width": "20%",
                  targets: 3
              },
              {
                //Action
                  render: function ( data, type, row ) {
                      return  row[12] ;
                  },
                  "width": "20%",
                  targets: 4
              },
          ]
      } );
    }
})
