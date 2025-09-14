let kms = {};

fetch('kms.json')
    .then(response => response.json())
    .then(data => {
        kms = data;

    });

    function lookupState() {
        const state = document.getElementById("stateInput").value.trim();
        const result = kms[state]
          ?  `${state}: ${kms[state]}`
          :  "There is no such State in India :(";
    document.getElementById("result").innerText = result;      

    };
