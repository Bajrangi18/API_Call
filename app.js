
document.getElementById('tap').addEventListener("click", updateFunc)

function updateFunc() {
    $(document).ready(function() {
        $.ajax({
          url: "https://5961vq2tph.execute-api.us-east-1.amazonaws.com/Stage2/",
          type: "GET",
          headers: {"x-api-key": "gbELimwuDq9JOvIrtaUZFfVzQTBl40788a7dJLe0"},
          success: function(result) {
            console.log(result);
          },
          error: function(error) {
            console.log(error);
          }
        });
      });
    document.getElementById('lenVal').innerHTML = "1"
}
