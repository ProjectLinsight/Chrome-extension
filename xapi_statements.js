function send_statement(user,title,link){
    // var conf = {  
    //     "endpoint" : "https://watershedlrs.com/api/organizations/11751/lrs/",  
    //     "auth" : "Basic " + toBase64("cdab2239ec6eca:a8c26a00e1507d")  
    //     };  
    
        var conf = {
            "endpoint" : "http://localhost/traxlrs/public/trax/ws/xapi/",
            "user" : "56b853c4-24f3-40aa-938f-37076e12e073",
            "password" : "dca59ca6-473f-4b0b-9250-174d02c64e00",
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
           "display": {"en": "Visited"}  
       },  
       "object": {  
           "id": "http://example.com/button_example",  
           "definition": {  
               "name": {"en": title},  
               "description": {"en": link}  
           },  
           "objectType": "Activity"  
       }  
    }; //end statement definition  
    
    // Dispatch the statement to the LRS  
    var result = ADL.XAPIWrapper.sendStatement(statement);  
}