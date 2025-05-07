const data = [
  { "CLASS_NAME": "SHRUB", "LOSS": 179.5977, "GAIN": 26.2656, "CHANGED": -76.5359389, "UNCHANGED": 2.0034 },
  { "CLASS_NAME": "BARELAND", "LOSS": 58.4982, "GAIN": 64.71, "CHANGED": 0.497083183, "UNCHANGED": 12.4965 },
  { "CLASS_NAME": "WETLAND", "LOSS": 40.9617, "GAIN": 19.9638, "CHANGED": -8.606049428, "UNCHANGED": 2.4399 },
  { "CLASS_NAME": "LOW DENSITY URBAN", "LOSS": 54.927, "GAIN": 20.799, "CHANGED": -21.68096055, "UNCHANGED": 1.5741 },
  { "CLASS_NAME": "WATERBODY", "LOSS": 96.5241, "GAIN": 66.0573, "CHANGED": -3.347043702, "UNCHANGED": 9.1026 },
  { "CLASS_NAME": "VEGETATION", "LOSS": 24.2946, "GAIN": 87.0525, "CHANGED": 29.4845666, "UNCHANGED": 2.1285 },
  { "CLASS_NAME": "HIGH DENSITY URBAN", "LOSS": 5.805, "GAIN": 175.7601, "CHANGED": 285.6868381, "UNCHANGED": 0.5949 }
];

// Table Rendering
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Changed Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row.CLASS_NAME}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGED.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Grouped Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d.CLASS_NAME),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d.CLASS_NAME),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart (Dropdown Controlled)
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.CHANGED)
    : d.UNCHANGED);
  const labels = data.map(d => d.CLASS_NAME);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial Load
updatePieChart("Changed");

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  