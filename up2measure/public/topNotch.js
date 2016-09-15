$( document ).ready();
    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

var loadCustomers = function(){
$.get( "/retrieveCustomers", function(data, status) {
  alert( "success" );
  console.log(data[0])
  console.log(data[1])
  console.log(data[2])
})
  .done(function() {
   //  console.log("TempDBpar:"+ data[0].jobImage)
   // var TempDBpar = JSON.parse(data[0].jobImage);
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

