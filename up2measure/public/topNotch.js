$( document ).ready();
    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

var loadCustomers = function(){
$.get( "/retrieveCustomers", function(data, status) {
  alert( "success" );
  console.log(data)
  

  $('a#job').text(data[0].jobNumb, data[0].jobName)
})
  .done(function(data) {
// for (var i= 0; i< data.length;i++)
//    console.log(data[i].jobName)
//    $('a#job').text(data[i].jobName)

    alert( "second success" );
    // console.log(TempDBpar)
    // lc.loadSnapshot(TempDBpar)
    // return TempDBpar;
    
  })
  .fail(function() {
    console.log()
    alert( "error" );
    
  })
  .always(function() {
    alert( "finished" );
    console.log()
  });
};


loadCustomers();

