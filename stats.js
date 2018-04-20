function getWeeksArray() {
  var weekArray = [];
  for (var i = 0; i < 30; i++) {
    weekArray.push("3/" + i);
  }
  return weekArray;
}

function getGeneratedLineData(numbers) {
  return {
    labels: getWeeksArray(),
    datasets: [
      {
        borderColor: "rgba(174,155,255,0.67)",
        pointColor: "#AE9BFF",
        data: numbers,
        pointRadius: 4,
        borderWidth: 1,
        pointBackgroundColor: "#C0B2FC"
      }
    ]
  };
}

function getGeneratedBarData(numbers) {
  var labels = getWeeksArray();
  return {
    labels: getWeeksArray(),
    datasets: [
      {
        labels: labels,
        backgroundColor: "rgba(174,155,255,0.67)",
        data: numbers
      }
    ]
  };
}

function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function() {
    return Math.round(Math.random() * max);
  });
}

for (var i = 0; i < 6; i++) {
  var ctx = document.getElementById("stats-" + i).getContext("2d");
  var type, dataType;

  if (i !== 1 && i !== 4) {
    type = "line";
    dataType = getGeneratedLineData(randomArray(30, 1000));
  } else {
    type = "bar";
    dataType = getGeneratedBarData(randomArray(30, 1000));
  }

  new Chart(ctx, {
    type: type,
    data: dataType,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "black",
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0
        }
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "#444363",
              fontSize: 12
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "#444363",
              fontSize: 12
            }
          }
        ]
      }
    }
  });
}
