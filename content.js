console.log("Chrome extension go");

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);

var courseSeconds = 0;

var isCourseTimerActive = false;

// window.setInterval( () => {
//     if (isCourseTimerActive === true) {
//         courseSeconds += 1;
//         // console.log(courseSeconds);
//         if(courseSeconds == 5 ){
//                 console.log(courseSeconds);
//                 isCourseTimerActive = false
//                 manageTimer.course.stop();
//                 chrome.extension.sendMessage({ cmd: "getOnOffState" }, function (response){
//                     // alert(response);
//                     chrome.storage.sync.get(['username'], function(result) {
//                         var user= result.username;
//                         console.log(user);
//                         console.log('Value currently is ' + result.username);
//                             if (response){
//                             alert(response);
//                             console.log(link);
//                             send_statement(user,title,link);
//                             console.log(title);
//                             // send_statement(user,title);   
//                             window.addEventListener('yt-page-data-updated', function () {
//                                 console.log('url change');
//                                 var ylink = window.location.href;
//                                 var ytitle= window.document.title
//                                 alert(response);
//                                 console.log(ylink);
//                                 send_statement(user,ylink);
//                                 console.log(ytitle);
//                                 send_statement(user,ytitle);
//                             });    
//                             }
//                             else{
//                                 alert(response);
//                             }
//                         });
//                 });
                
                
                
//                 chrome.storage.sync.get(['username'], function(result) {
//                     var user= result.username;
//                     console.log('Value currently is ' + result.username);
//                   });
//             }
//     }
// }, 1000);

const manageTimer = {
    "course": {
        "start": () => {isCourseTimerActive = true},
        "stop": () => {isCourseTimerActive = false},
        "reset": () => {courseSeconds = 0}
    }
}
var link = window.location.href;
var title= window.document.title;
manageTimer.course.start();

// window.addEventListener('yt-page-data-updated', function () {
//     console.log('url change');
//     var link = window.location.href;
//     console.log(link);

// });
// console.log(link);
// send_statement(link);
// console.log(title);
// send_statement(title);

chrome.extension.sendMessage({ cmd: "getOnOffState" }, function (response){
    // alert(response);
    chrome.storage.sync.get(['username'], function(result) {
        var user= result.username;
        console.log(user);
        console.log('Value currently is ' + result.username);
            if (response){
            alert(response);
            console.log(link);
            send_statement(user,title,link);
            console.log(title);
            // send_statement(user,title);   
            window.addEventListener('yt-page-data-updated', function () {
                console.log('url change');
                var ylink = window.location.href;
                var ytitle= window.document.title
                alert(response);
                console.log(ylink);
                send_statement(user,ytitle,ylink);
                console.log(ytitle);
                // send_statement(user,ytitle);
            });    
            }
            else{
                alert(response);
            }
        });
});



chrome.storage.sync.get(['username'], function(result) {
    var user= result.username;
    console.log('Value currently is ' + result.username);
  });

//   console.log(user);
 
    // var conf = {  
    //      "endpoint" : "https://watershedlrs.com/api/organizations/11751/lrs/",  
    //      "auth" : "Basic " + toBase64("cdab2239ec6eca:a8c26a00e1507d")  
    //      };  

    // ADL.XAPIWrapper.changeConfig(conf);  
       
    // //define the xapi statement being sent  
    // var statement = {  
    //     "actor": {  
    //         "mbox": "mailto:Tester@example.com",  
    //         "name": "Gagana",  
    //         "objectType": "Agent"  
    //     },  
    //     "verb": {  
    //         "id": "http://example.com/xapi/interacted",  
    //         "display": {"en-US": "Visited"}  
    //     },  
    //     "object": {  
    //         "id": "http://example.com/button_example",  
    //         "definition": {  
    //             "name": {"en-US": link},  
    //             "description": {"en-US": link}  
    //         },  
    //         "objectType": "Activity"  
    //     }  
    // }; //end statement definition  

    // // Dispatch the statement to the LRS  
    // var result = ADL.XAPIWrapper.sendStatement(statement); 