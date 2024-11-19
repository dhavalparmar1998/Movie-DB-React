
async function fetchapi(apiPath){
    var res = await fetch(apiPath);
    var record = await res.json();
    return record

}

export default fetchapi;
