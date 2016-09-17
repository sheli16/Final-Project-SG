// $( document ).ready();
    // Assign handlers immediately after making the request,


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
    
      $('a#job1').text(data[0].jobNumb)
		       // $('#customernumber').text(data[0].jobNumb)
				$('#customername1').text(data[0].jobName)
				$('#customeraddress1').text(data[0].jobAddress)
				console.log(data[0].jobAddress)
				$('#Material1').text(data[0].jobMaterial)
				$('#Sink1').text(data[0].jobSink)
				$('#Edge1').text(data[0].jobEdge)
				console.log(data[0].jobEdge)
				$('#SqFt1').text(data[0].jobSqFt)
console.log(data[0].jobName)
       	
       	$('a#job2').text(data[1].jobNumb)
		       // $('#customernumber').text(data[1].jobNumb)
				$('#customername2').text(data[1].jobName)
				$('#customeraddress2').text(data[1].jobAddress)
				console.log(data[1].jobAddress)
				$('#Material2').text(data[1].jobMaterial)
				$('#Sink2').text(data[1].jobSink)
				$('#Edge2').text(data[1].jobEdge)
				console.log(data[1].jobEdge)
				$('#SqFt2').text(data[1].jobSqFt)
        

        $('a#job3').text(data[2].jobNumb)
        		// $('#customernumber').text(data[2].jobNumb)
				$('#customername3').text(data[2].jobName)
				$('#customeraddress3').text(data[2].jobAddress)
				console.log(data[2].jobAddress)
				$('#Material3').text(data[2].jobMaterial)
				$('#Sink3').text(data[2].jobSink)
				$('#Edge3').text(data[2].jobEdge)
				console.log(data[2].jobEdge)
				$('#SqFt3').text(data[2].jobSqFt)
         
         $('a#job4').text(data[3].jobNumb)
         		// $('a#job2').text(data[3].jobName)
		       // $('#customernumber').text(data[3].jobNumb)
				 $('#customername4').text(data[3].jobName)
				$('#customeraddress4').text(data[3].jobAddress)
				console.log(data[3].jobAddress)
				$('#Material4').text(data[3].jobMaterial)
				$('#Sink4').text(data[3].jobSink)
				$('#Edge4').text(data[3].jobEdge)
				console.log(data[3].jobEdge)
				$('#SqFt4').text(data[3].jobSqFt)
          
          $('a#job5').text(data[4].jobNumb)
          		// $('a#job2').text(data[4].jobName)
		       // $('#customernumber').text(data[4].jobNumb)
				$('#customername5').text(data[4].jobName)
				$('#customeraddress5').text(data[4].jobAddress)
				console.log(data[4].jobAddress)
				$('#Material5').text(data[4].jobMaterial)
				$('#Sink5').text(data[4].jobSink)
				$('#Edge5').text(data[4].jobEdge)
				console.log(data[4].jobEdge)
				$('#SqFt5').text(data[4].jobSqFt)
           
           $('a#job6').text(data[5].jobNumb)
           		// $('a#job2').text(data[5].jobName)
		       // $('#customernumber').text(data[5].jobNumb)
				$('#customername6').text(data[5].jobName)
				$('#customeraddress6').text(data[5].jobAddress)
				console.log(data[5].jobAddress)
				$('#Material6').text(data[5].jobMaterial)
				$('#Sink6').text(data[5].jobSink)
				$('#Edge6').text(data[5].jobEdge)
				console.log(data[5].jobEdge)
				$('#SqFt6').text(data[5].jobSqFt)
            
            $('a#job7').text(data[6].jobNumb)
            	// $('a#job2').text(data[6].jobName)
		       // $('#customernumber').text(data[6].jobNumb)
				$('#customername7').text(data[6].jobName)
				$('#customeraddress7').text(data[6].jobAddress)
				console.log(data[6].jobAddress)
				$('#Material7').text(data[6].jobMaterial)
				$('#Sink7').text(data[6].jobSink)
				$('#Edge7').text(data[6].jobEdge)
				console.log(data[6].jobEdge)
				$('#SqFt7').text(data[6].jobSqFt)
            
            $('a#job8').text(data[7].jobNumb)
            	// $('a#job2').text(data[7].jobName)
		       // $('#customernumber').text(data[7].jobNumb)
				$('#customername8').text(data[7].jobName)
				$('#customeraddress8').text(data[7].jobAddress)
				console.log(data[7].jobAddress)
				$('#Material8').text(data[7].jobMaterial)
				$('#Sink8').text(data[7].jobSink)
				$('#Edge8').text(data[7].jobEdge)
				console.log(data[7].jobEdge)
				$('#SqFt8').text(data[7].jobSqFt)
            
            $('a#job9').text(data[8].jobNumb)
            	// $('a#job2').text(data[8].jobName)
		       	// $('#customernumber').text(data[8].jobNumb)
				$('#customername9').text(data[8].jobName)
				$('#customeraddress9').text(data[8].jobAddress)
				console.log(data[8].jobAddress)
				$('#Material9').text(data[8].jobMaterial)
				$('#Sink9').text(data[8].jobSink)
				$('#Edge9').text(data[8].jobEdge)
				console.log(data[8].jobEdge)
				$('#SqFt9').text(data[8].jobSqFt)
            
            $('a#job10').text(data[9].jobNumb)
            	// $('a#job2').text(data[9].jobName)
		       	// $('#customernumber').text(data[9].jobNumb)
				$('#customername10').text(data[9].jobName)
				$('#customeraddress10').text(data[9].jobAddress)
				console.log(data[9].jobAddress)
				$('#Material10').text(data[9].jobMaterial)
				$('#Sink10').text(data[9].jobSink)
				$('#Edge10').text(data[9].jobEdge)
				console.log(data[9].jobEdge)
				$('#SqFt10').text(data[9].jobSqFt)
    
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
		// $('#customernumber').text(data[0].jobNumb)
		// $('#customername').text(data[0].jobName)
		// $('#customeraddress').text(data[0].jobAddress)
		// console.log(data[0].jobAddress)
		// // Display in Job detsils
		// $('#Material').text(data[0].jobMaterial)
		// $('#Sink').text(data[0].jobSink)
		// $('#Edge').text(data[0].jobEdge)
		// console.log(data[0].jobEdge)
		// $('#SqFt').text(data[0].jobSqFt)
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


$("#save-image").click(function() {
       
           // Retrieve customer number from Dom
          var customerNum = $('#Temp').val()
            // console.log(parseInt(customerNum))

            var custTemp = {
            jobNo: customerNum,
            snapshot: JSON.stringify(lc.getSnapshot())
            
            }
            console.log(custTemp)
            var msg = "It was sent to route"
 
            $.post("/saveimage", custTemp);
        
            alert( "Data Sent: " + msg );

            })

  $('#show-lc').click(function() {
    
var customerNum = $('#Temp').val()
var cnFind ={
		jobNo: customerNum
		}
		alert(cnFind)

$.post( "/retrieveTemplate", cnFind, function(data, status) {
  alert( "success" );
  console.log(data[0].jobImage)
})
  .done(function(data) {
    console.log("TempDBpar:"+ data[0].jobImage)
   var TempDBpar = JSON.parse(data[0].jobImage);
    alert( "second success" );
    console.log(TempDBpar)
    lc.loadSnapshot(TempDBpar)
    // return TempDBpar;
    
  })
  .fail(function() {
    console.log()
    alert( "error" );
    
  })
  .always(function(TempDBpar) {
    alert( "finished" );
    console.log(TempDBpar)

  });
 
});


var findCustomer = function(cnFind){
	alert(cnFind + "findcustomer");

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
}


// function refreshDom(){
	// $('#customernumber').text(data[0].jobNumb)
	// 	$('#customername').text(data[0].jobName)
	// 	$('#customeraddress').text(data[0].jobAddress)
	// 	console.log(data[0].jobAddress)
	// 	// Display in Job detsils
	// 	$('#Material').text(data[0].jobMaterial)
	// 	$('#Sink').text(data[0].jobSink)
	// 	$('#Edge').text(data[0].jobEdge)
	// 	console.log(data[0].jobEdge)
	// 	$('#SqFt').text(data[0].jobSqFt)	
// }
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

 
		// Grab 
// $('a#job1').click(function(){
// 	alert("var cn = $('a#job1').text()")
// 	var cn = $('a#job1').text()
	
// 	alert(cn)
// 	console.log(cn)
// 	var cnFind ={
// 		customerName:cn	
// 	}
// 		console.log(cnFind)
// 		alert(cnFind)
// 		$.get( "/findCustomer", cnFind, function(data, status) {
 
//   alert( "success finding your customer");
//   console.log(data)
// })
//   .done(function(data) {
//     alert( "second success" );
//   //   $('#customernumber').text(data[0].jobNumb)
// 		// $('#customername').text(data[0].jobName)
// 		// $('#customeraddress').text(data[0].jobAddress)
// 		// console.log(data[0].jobAddress)
// 		// // Display in Job detsils
// 		// $('#Material').text(data[0].jobMaterial)
// 		// $('#Sink').text(data[0].jobSink)
// 		// $('#Edge').text(data[0].jobEdge)
// 		// console.log(data[0].jobEdge)
// 		// $('#SqFt').text(data[0].jobSqFt)
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {
//     alert( "finished" );
//   });
		
// })
      	

// $('a#job2').click(function(){

// 	var cn = $('a#job2').text()
// 		alert(cn)
// 	console.log(cn)
	
// 	var cn = $('a#job2').text()
// 	var cnFind ={
// 		customerName:cn	
// 		}
// 		alert(cnFind)
// 		console.log(cnFind)


// $.post( "/findCustomer", cnFind, function(data, status) {
 
//   alert( "success finding your customer");
//   console.log(data)
// })
//   .done(function(data) {
//     alert( "second success" );
//   //   $('#customernumber').text(data[0].jobNumb)
// 		// $('#customername').text(data[0].jobName)
// 		// $('#customeraddress').text(data[0].jobAddress)
// 		// console.log(data[0].jobAddress)
// 		// // Display in Job detsils
// 		// $('#Material').text(data[0].jobMaterial)
// 		// $('#Sink').text(data[0].jobSink)
// 		// $('#Edge').text(data[0].jobEdge)
// 		// console.log(data[0].jobEdge)
// 		// $('#SqFt').text(data[0].jobSqFt)
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {



//     alert( "finished" );
//   });
		// findCustomer(cnFind);
		// })
      
//  $('a#job3').click(function(){
// 	var cn = $('a#job3').text()
// 	var cnFind ={
// 		customerName:cn	
// 		}
// 		alert(cnFind)
// 		console.log(cnFind)

// 		findCustomer(cnFind);
// 		})
// $('a#job4').click(function(){
// 	var cn = $('a#job4').text()
// 		findCustomer(cn);
// 		})
// $('a#job5').click(function(){
// 	var cn = $('a#job5').text()
// 		findCustomer(cn);
// 		})
        
//  $('a#job6').click(function(){
// 	var cn = $('a#job6').text()
// 		findCustomer(cn);
// 		})
// $('a#job7').click(function(){
// 	var cn = $('a#job7').text()
// 		findCustomer(cn);
// 		})
// $('a#job8').click(function(){
// 	var cn = $('a#job8').text()
// 		findCustomer(cn);
// 		}) 
// $('a#job9').click(function(){
// 	var cn = $('a#job9').text()
// 		findCustomer(cn);
// 		}) 
// $('a#job10').click(function(){
// 	var cn = $('a#job10').text()
// 		findCustomer(cn);
// 		}) 
// $('button#loadc').click(function(){
// 	theDOM = $('html').clone(true);
// 	loadCustomers();
// 		}) 


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
   