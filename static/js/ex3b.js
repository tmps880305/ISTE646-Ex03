
// Function to grab data on sbmit and show on console.log
// Auto redirect by 5 seconds
function formSubmit(){
    document.getElementById('form').addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
    
        console.log('------------Your visit--------------')
    
        for (const [name,value] of data) {
            console.log(name, ":", value)
        }
    
        console.log('Thank you!')
        console.log('------------------------------------')
    
        setTimeout(function(){
            window.location.reload();
        }, 5000);
    })
}