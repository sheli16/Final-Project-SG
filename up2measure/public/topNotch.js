$( document ).ready();
    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

// var loadCustomers = function(){
// $.get( "/retrieveCustomers", function(data, status) {
//   alert( "success" );
//   console.log(data[0].jobNumb)
//   console.log(data[0].jobName)
//  // $('a#job1').text(data[1].jobName)
//   console.log(data[1].jobName)
// })
//   .done(function(data) {
// // $('a#job').each(function(i,data){
//   //for (var i= 0; i< data.length;i++) {
//     // $('a#job').text(data[i].jobName)
    
//       $('a#job1').text(data[0].jobName)
//       console.log(data[0].jobName)
//        $('a#job2').text(data[1].jobName)
//         $('a#job3').text(data[2].jobName)
//          $('a#job4').text(data[3].jobName)
//           $('a#job5').text(data[4].jobName)
//            $('a#job6').text(data[5].jobName)
//             $('a#job7').text(data[6].jobName)
//             $('a#job8').text(data[7].jobName)
//             $('a#job9').text(data[8].jobName)
//             $('a#job10').text(data[9].jobName)
//     alert( "second success" );
//     // console.log(TempDBpar)
//     // lc.loadSnapshot(TempDBpar)
//     // return TempDBpar;
//     })

//   .fail(function() {
//     console.log()
//     alert( "error" );
    
//   })
//   .always(function() {
//     alert( "finished" );
//     console.log()
//   });
// };


// loadCustomers();
$("").click(function() {
var searchTerm = $("#search").text()

console.log(searchTerm)


$.get( "/findCustomer", searchTerm, function(data, status) {
 
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
  });

$("#newcust").click(function() {
var customerNum = parseInt($('#customernumber').text())
            console.log(parseInt(customerNum))
            
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
