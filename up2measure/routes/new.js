// //  Select cusomters from database 
//     findCustomer: function(userId, cbFunction) {
//         var queryString = 'SELECT jobNumb OR jobName FROM jobs WHERE userID=?';
//         console.log('findCustomer: '+ queryString);
//         connection.query(queryString,[userId], function(err, res) {
//             if (err) {
//                 console.log(err) 
//                 return cbFunction(err)
//             }
//            else{
//             console.log('response:', res)
//             cbFunction(null, res)
//            }
//         
//  Select cusomters from database 
    findCustomer: function(userId, cbFunction) {
        var queryString = 'SELECT jobNumb OR jobName FROM jobs WHERE userID=?';
        console.log('findCustomer: '+ queryString);
        connection.query(queryString,[userId], function(err, res) {
            if (err) {
                console.log(err) 
                return cbFunction(err)
            }
           else{
            console.log('response:', res)
            cbFunction(null, res)
           }
        });
    },
