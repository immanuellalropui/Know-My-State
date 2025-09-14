let kms = {};

fetch('package.json')
    .then(response => response.json())
    .then(data => {
        package = data;

    });

    function lookupState() {
        const state = document.getElementById("stateInput").value.trim();
        const result = package[state]
          ?  `${state}: ${package[state]}`
          :  "There is no such State in India :(";
    document.getElementById("result").innerText = result;      

    };
