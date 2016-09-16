$( document ).ready();
    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

var loadCustomers = function(){
$.get( "/retrieveCustomers", function(data, status) {
  alert( "success" );
  console.log(data)
  console.log(data[0].jobNumb)
  console.log(data[0].jobName)
 // $('a#job1').text(data[1].jobName)
  console.log(data[1].jobName)
})
  .done(function(data) {
// $('a#job').each(function(i,data){
  //for (var i= 0; i< data.length;i++) {
    // $('a#job').text(data[i].jobName)
    
      $('a#job1').text(data[0].jobName)
      console.log(data[0].jobName)
       $('a#job2').text(data[1].jobName)
        $('a#job3').text(data[2].jobName)
         $('a#job4').text(data[3].jobName)
          $('a#job5').text(data[4].jobName)
           $('a#job6').text(data[5].jobName)
            $('a#job7').text(data[6].jobName)
            $('a#job8').text(data[7].jobName)
            $('a#job9').text(data[8].jobName)
            $('a#job10').text(data[9].jobName)
    alert( "second success" );
    // console.log(TempDBpar)
    // lc.loadSnapshot(TempDBpar)
    // return TempDBpar;
    })

  .fail(function() {
    console.log()
    alert( "error" );
    
  })
  .always(function(data) {
// Display in address Card
		$('#customernumber').text(data[0].jobNumb)
		$('#customername').text(data[0].jobName)
		$('#customeraddress').text(data[0].jobAddress)
		console.log(data[0].jobAddress)
		// Display in Job detsils
		$('#Material').text(data[0].jobMaterial)
		$('#Sink').text(data[0].jobSink)
		$('#Edge').text(data[0].jobEdge)
		console.log(data[0].jobEdge)
		$('#SqFt').text(data[0].jobSqFt)
    alert( "finished" );
    console.log()


  });
};

function GetTodayDate() {
   var tdate = new Date();
   var dd = tdate.getDate(); //yields day
   var MM = tdate.getMonth(); //yields month
   var yyyy = tdate.getFullYear(); //yields year
   var xxx = dd + "-" +( MM+1) + "-" + yyyy;
   $('#customerDate').text(xxx);
}

GetTodayDate();
loadCustomers();


// Drawer database Link

		// Grab 
$('a#job1').click(function(){
	alert("var cn = $('a#job1').text()")
	var cn = $('a#job1').text()
	
	alert(cn)
	console.log(cn)
	var cnFind ={
		customerName:cn	
	}
		console.log(cnFind)
		alert(cnFind)
		$.get( "/findCustomer", cnFind, function(data, status) {
 
  alert( "success finding your customer");
  console.log(data)
})
  .done(function(data) {
    alert( "second success" );
    $('#customernumber').text(data[0].jobNumb)
		$('#customername').text(data[0].jobName)
		$('#customeraddress').text(data[0].jobAddress)
		console.log(data[0].jobAddress)
		// Display in Job detsils
		$('#Material').text(data[0].jobMaterial)
		$('#Sink').text(data[0].jobSink)
		$('#Edge').text(data[0].jobEdge)
		console.log(data[0].jobEdge)
		$('#SqFt').text(data[0].jobSqFt)
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
		
})
      	

$('a#job2').click(function(){
	var cn = $('a#job2').text()
		alert(cn)
	console.log(cn)
	var cn = $('a#job2').text()
	var cnFind ={
		customerName:cn	
		}
		alert(cnFind)
		console.log(cnFind)


$.post( "/findCustomer", cnFind, function(data, status) {
 
  alert( "success finding your customer");
  console.log(data)
})
  .done(function(data) {
    alert( "second success" );
    $('#customernumber').text(data[0].jobNumb)
		$('#customername').text(data[0].jobName)
		$('#customeraddress').text(data[0].jobAddress)
		console.log(data[0].jobAddress)
		// Display in Job detsils
		$('#Material').text(data[0].jobMaterial)
		$('#Sink').text(data[0].jobSink)
		$('#Edge').text(data[0].jobEdge)
		console.log(data[0].jobEdge)
		$('#SqFt').text(data[0].jobSqFt)
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
		// findCustomer(cnFind);
		})
      
 $('a#job3').click(function(){
	var cn = $('a#job3').text()
		findCustomer(cn);
		})
$('a#job4').click(function(){
	var cn = $('a#job4').text()
		findCustomer(cn);
		})
$('a#job5').click(function(){
	var cn = $('a#job5').text()
		findCustomer(cn);
		})
        
 $('a#job6').click(function(){
	var cn = $('a#job6').text()
		findCustomer(cn);
		})
$('a#job7').click(function(){
	var cn = $('a#job7').text()
		findCustomer(cn);
		})
$('a#job8').click(function(){
	var cn = $('a#job8').text()
		findCustomer(cn);
		}) 
$('a#job9').click(function(){
	var cn = $('a#job9').text()
		findCustomer(cn);
		}) 
$('a#job10').click(function(){
	var cn = $('a#job10').text()
		findCustomer(cn);
		}) 


// var customerName = 
// console.log(customerName)

// $.get( "/retrieveCustomers", function(data, status) {
//   alert( " customer name success" );
//   console.log(data)
//   console.log(data[0].jobNumb)
//   console.log(data[0].jobName)
//  // $('a#job1').text(data[1].jobName)
//   console.log(data[1].jobName)
//   e.preventDefault();
        

//   });
// });
   

var findCustomer = function(cnFind){
	alert(cnFind + "findcustomer");

$.get( "/findCustomer", cnFind, function(data, status) {
 
  alert( "success finding your customer");
  console.log(data)
})
  .done(function(data) {
    alert( "second success" );
    $('#customernumber').text(data[0].jobNumb)
		$('#customername').text(data[0].jobName)
		$('#customeraddress').text(data[0].jobAddress)
		console.log(data[0].jobAddress)
		// Display in Job detsils
		$('#Material').text(data[0].jobMaterial)
		$('#Sink').text(data[0].jobSink)
		$('#Edge').text(data[0].jobEdge)
		console.log(data[0].jobEdge)
		$('#SqFt').text(data[0].jobSqFt)
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
}




// }) 
// })	 
// for (var i= 0; i< data.length;i++){


// 	customerName === data[i]
// }
	



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
//             $('a#job10').text(data[9].jobName

// var custQuery = {
// 	ctQuery: customerName 
// }
// console.log(customerName)
// $.get("/findCustomer", custQuery, function(data, status) {
//   alert( "Found customer success" );
//   console.log(data)
  
// })
//   .done(function(data) {
//  console.log(data)
//   	// refreshDom(data);

//     alert( "Found customer second success" );
//     })
//   	console.log(data)
//   .fail(function() {
//     console.log()
//     alert( "error" );
    
//   })
//   .always(function() {
//   // 		var customerNum = $('#CustNumb').val()
		
//   })
// });		



function refreshDom(){
	$('#customernumber').text(data[0].jobNumb)
		$('#customername').text(data[0].jobName)
		$('#customeraddress').text(data[0].jobAddress)
		console.log(data[0].jobAddress)
		// Display in Job detsils
		$('#Material').text(data[0].jobMaterial)
		$('#Sink').text(data[0].jobSink)
		$('#Edge').text(data[0].jobEdge)
		console.log(data[0].jobEdge)
		$('#SqFt').text(data[0].jobSqFt)	
}
// $( "#CustNumb" )
//   .keyup(function() {
//     var value = $( this ).val();
//     $( "customernumber" ).text( value );
//      // $( "customerDate" ).text( value );
//      // $( "customerDate" ).text( value );
//   })
//   .keyup();

//   alert( "success" );
// })
//   .done(function() {
//     alert( "second success" );
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {
//     alert( "finished" );
//   });
//   });

// });
 
// Perform other work here ...

// Set another completion function for the request above

// $("search").click(function() {
// var searchTerm = $("#CustNumb").text()

// console.log(searchTerm)



// //   });
 // for (var i= 0; i< data.length;i++) 
  // 	console.log(data[i])
  //   if(customerName == data[i].jobname)