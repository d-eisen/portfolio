google.charts.load('current', {
    packages: ['corechart', 'bar']
  });
  google.charts.setOnLoadCallback(drawBasic);
  
  function drawBasic() {
  
    var data = google.visualization.arrayToDataTable([
      ['Activity', 'Participation', ],
      ['Give financially', 88],
      ['Volunteer time', 81],
      ['Share on social media', 69],
      ['Promote a campaign', 38],
  
    ]);
  
    var options = {
      title: 'Types of Involvment',
      chartArea: {
        width: '50%'
      },
      hAxis: {
        title: 'Time Spent with NGOs',
        minValue: 0
      },
      vAxis: {
        title: 'Activity'
      }
    };
  
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  
    chart.draw(data, options);
  }
  