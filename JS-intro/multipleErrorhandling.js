function createjson(){
    try{
        //let data=JSON.parse("{id:01,}");
        console.log(x);
        const school={
            "name":"xyz",
            "location":"abc"
        }
        JSON.stringify(school);
        JSON.parse('school');
        console.log("school");
    }
    catch(err){
        if(err instanceof SyntaxError){
            console.log("syntax error occured");
        }
        else if(err instanceof ReferenceError){
            console.log("reference error occured");
        }
    }
}
createjson();