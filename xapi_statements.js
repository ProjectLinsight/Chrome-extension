function send_statement(user,link){
    // var conf = {  
    //     "endpoint" : "https://watershedlrs.com/api/organizations/11751/lrs/",  
    //     "auth" : "Basic " + toBase64("cdab2239ec6eca:a8c26a00e1507d")  
    //     };  
    
        var conf = {
            "endpoint" : "http://127.0.0.1:81/traxlrs/public/trax/ws/xapi/",
            "user" : "testsuite",
            "password": "password"
          };

    ADL.XAPIWrapper.changeConfig(conf);  
      
    //define the xapi statement being sent  
    var statement = {  
       "actor": {  
        //    "mbox": "mailto:Tester@example.com",  
        //    "name": user,  
        //    "objectType": "Agent"  
            "name": user,
            "account": {
                "name": user,
                "homePage": "http://localhost"
            },
            "objectType": "Agent"
       },  
       "verb": {  
           "id": "http://example.com/xapi/visited",  
           "display": {"en-US": "Visited"}  
       },  
       "object": {  
           "id": "http://example.com/button_example",  
           "definition": {  
               "name": {"en-US": link},  
               "description": {"en-US": link}  
           },  
           "objectType": "Activity"  
       }  
    }; //end statement definition  
    
    // Dispatch the statement to the LRS  
    var result = ADL.XAPIWrapper.sendStatement(statement);  
}


