onload = () => {

    let value = parseInt(prompt("Enter number of tests (recommended 16) 1 test - 100ms ( max 60 tests)"));
    if(value < 1)
        return;
    if(value > 60)
        return;
    if(!Number.isInteger(value)) return;
    if(Number.isNaN(value)) return;
    createTests(value);

    var ctx = document.getElementById('chart').getContext('2d');

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: 'Current Time-score',
                data: values,
                backgroundColor: 'rgba(0,0,0,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1
            }]
        }
    });

}

function createTests(samples) {
    let def = samples;
    let c = Date.now() + 100;
    while (samples > 0) {
        if (Date.now() > c) {
            if (curr > max) {
                max = curr;
            }
            if (curr < min) {
                min = curr;
            }
            c = Date.now() + 100;
            time.push((def*100)-(samples*100));
            values.push(parseFloat(curr.toFixed(2)));
            curr = 0;
            samples--;
        }
        curr += 0.001;
    }
    document.getElementById('d'
    ).innerText="Test done";
}


let min = 0.0, curr = 0.0, max = 0.0;
let values = [];
let time = [];