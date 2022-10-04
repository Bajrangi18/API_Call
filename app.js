
document.getElementById('tap').addEventListener("click", updateFunc)

function updateFunc() {
    fetch('https://5961vq2tph.execute-api.us-east-1.amazonaws.com/Stage2/',{
        mode: 'cors',
        headers: {
          'x-api-key': "gbELimwuDq9JOvIrtaUZFfVzQTBl40788a7dJLe0"
        }
    })
    .then(res => res.json())
    .then((out) => {
    // console.log(out['Items'][0])
    let obj = out['Items']
    document.getElementById('lenVal').innerHTML = obj.length
    })
    .catch(err => console.error(err));
    // document.getElementById('lenVal').innerHTML = 
}
