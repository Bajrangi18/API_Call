
document.getElementById('tap').addEventListener("click", updateFunc)

function updateFunc() {
    const url = 'https://5961vq2tph.execute-api.us-east-1.amazonaws.com/Stage2/'
        const customHeaders = {
            "Access-Control-Allow-Origin": "https://5961vq2tph.execute-api.us-east-1.amazonaws.com",
            "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
            "Content-Type": "application/json",
            "x-api-key": "gbELimwuDq9JOvIrtaUZFfVzQTBl40788a7dJLe0"
        }
     
        fetch(url, {
            method: "GET",
            mode: 'cors',
            headers: customHeaders
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    document.getElementById('lenVal').innerHTML = "1"
}
