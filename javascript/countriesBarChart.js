const countriesBarChartData = [
  { Country: "US1", Total: 883565.0 },
  { Country: "US2", Total: 883565.0 },
  { Country: "US3", Total: 883565.0 },
  { Country: "US4", Total: 883565.0 },
  { Country: "United Kingdom", Total: 581436.0 },
  { Country: "Canada", Total: 286758.0 },
  { Country: "Germany", Total: 262794.0 },
  { Country: "Australia", Total: 185906.0 },
  { Country: "Russian Federation", Total: 174352.0 },
  { Country: "Brazil", Total: 152004.0 },
  { Country: "Sweden", Total: 135298.0 },
  { Country: "Finland", Total: 131376.0 },
  { Country: "Czechia", Total: 126118.0 },
  { Country: "Italy", Total: 120950.0 },
  { Country: "Korea, Republic of", Total: 114305.0 },
  { Country: "Poland", Total: 109706.0 },
  { Country: "Saudi Arabia", Total: 106883.0 },
  { Country: "France", Total: 105052.0 },
  { Country: "Thailand", Total: 102764.0 },
  { Country: "Philippines", Total: 102168.0 },
  { Country: "Hungary", Total: 89917.0 },
  { Country: "Netherlands", Total: 88400.0 },
  { Country: "Indonesia", Total: 66473.0 },
  { Country: "Romania", Total: 61276.0 },
  { Country: "India", Total: 59023.0 },
  { Country: "Viet Nam", Total: 58497.0 },
  { Country: "Slovakia", Total: 54734.0 },
  { Country: "Japan", Total: 51380.0 },
  { Country: "United Arab Emirates", Total: 47310.0 },
  //   { Country: "Taiwan, Province of China", Total: 46279.0 },
  //   { Country: "Ukraine", Total: 43238.0 },
  //   { Country: "Norway", Total: 40782.0 },
  //   { Country: "Malaysia", Total: 40061.0 },
  //   { Country: "Ireland", Total: 38047.0 },
  //   { Country: "Croatia", Total: 37860.0 },
  //   { Country: "Türkiye", Total: 37185.0 },
  //   { Country: "New Zealand", Total: 36841.0 },
  //   { Country: "Serbia", Total: 35250.0 },
  //   { Country: "Bulgaria", Total: 33155.0 },
  //   { Country: "Hong Kong", Total: 33094.0 },
  //   { Country: "Austria", Total: 31571.0 },
  //   { Country: "Denmark", Total: 29783.0 },
  //   { Country: "Switzerland", Total: 29413.0 },
  //   { Country: "Spain", Total: 28306.0 },
  //   { Country: "Mexico", Total: 28106.0 },
  //   { Country: "Portugal", Total: 27939.0 },
  //   { Country: "Singapore", Total: 23995.0 },
  //   { Country: "Belgium", Total: 22856.0 },
  //   { Country: "Israel", Total: 20025.0 },
  //   { Country: "Argentina", Total: 18451.0 },
  //   { Country: "Estonia", Total: 17296.0 },
  //   { Country: "South Africa", Total: 16993.0 },
  //   { Country: "Bosnia and Herzegovina", Total: 16452.0 },
  //   { Country: "Iraq", Total: 14950.0 },
  //   { Country: "Egypt", Total: 13116.0 },
  //   { Country: "Lithuania", Total: 12810.0 },
  //   { Country: "Greece", Total: 12768.0 },
  //   { Country: "Kuwait", Total: 12763.0 },
  //   { Country: "Kazakhstan", Total: 12456.0 },
  //   { Country: "Algeria", Total: 11666.0 },
  //   { Country: "Latvia", Total: 11564.0 },
  //   { Country: "Colombia", Total: 10945.0 },
  //   { Country: "Chile", Total: 10388.0 },
  //   { Country: "Belarus", Total: 10183.0 },
  //   { Country: "Qatar", Total: 9701.0 },
  //   { Country: "Cambodia", Total: 9611.0 },
  //   { Country: "Slovenia", Total: 8978.0 },
  //   { Country: "Jordan", Total: 8428.0 },
  //   { Country: "Pakistan", Total: 8050.0 },
  //   { Country: "Bahrain", Total: 6756.0 },
  //   { Country: "Morocco", Total: 6252.0 },
  //   { Country: "Peru", Total: 6189.0 },
  //   { Country: "North Macedonia", Total: 5768.0 },
  //   { Country: "Georgia", Total: 5753.0 },
  //   { Country: "Moldova, Republic of", Total: 4580.0 },
  //   { Country: "Oman", Total: 4404.0 },
  //   { Country: "Bangladesh", Total: 4104.0 },
  //   { Country: "Puerto Rico", Total: 3814.0 },
  //   { Country: "Iceland", Total: 3775.0 },
  //   { Country: "Palestine, State of", Total: 3759.0 },
  //   { Country: "Lebanon", Total: 3337.0 },
  //   { Country: "Venezuela, Bolivarian Republic of", Total: 3335.0 },
  //   { Country: "Ecuador", Total: 3241.0 },
  //   { Country: "Tunisia", Total: 3036.0 },
  //   { Country: "Nepal", Total: 2719.0 },
  //   { Country: "Malta", Total: 2453.0 },
  //   { Country: "Brunei Darussalam", Total: 2382.0 },
  //   { Country: "Montenegro", Total: 2333.0 },
  //   { Country: "Cyprus", Total: 2157.0 },
  //   { Country: "Costa Rica", Total: 2149.0 },
  //   { Country: "Trinidad and Tobago", Total: 2034.0 },
  //   { Country: "Albania", Total: 2021.0 },
  //   { Country: "Luxembourg", Total: 1986.0 },
  //   { Country: "Guam", Total: 1948.0 },
  //   { Country: "Armenia", Total: 1851.0 },
  //   { Country: "Uruguay", Total: 1730.0 },
  //   { Country: "Dominican Republic", Total: 1653.0 },
  //   { Country: "Macao", Total: 1636.0 },
  //   { Country: "Azerbaijan", Total: 1527.0 },
  //   { Country: "Guatemala", Total: 1380.0 },
  //   { Country: "Maldives", Total: 1253.0 },
  //   { Country: "Réunion", Total: 1197.0 },
  //   { Country: "Kyrgyzstan", Total: 1158.0 },
  //   { Country: "Honduras", Total: 1119.0 },
  //   { Country: "Kenya", Total: 1082.0 },
  //   { Country: "Panama", Total: 1069.0 },
  //   { Country: "El Salvador", Total: 1006.0 },
  //   { Country: "Mongolia", Total: 964.0 },
  //   { Country: "Uzbekistan", Total: 875.0 },
  //   { Country: "Bolivia, Plurinational State of", Total: 869.0 },
  //   { Country: "Jamaica", Total: 838.0 },
  //   { Country: "Mauritius", Total: 835.0 },
  //   { Country: "China", Total: 835.0 },
  //   { Country: "Paraguay", Total: 799.0 },
  //   { Country: "Bahamas", Total: 739.0 },
  //   { Country: "Guernsey", Total: 715.0 },
  //   { Country: "Jersey", Total: 709.0 },
  //   { Country: "Sri Lanka", Total: 703.0 },
  //   { Country: "Isle of Man", Total: 642.0 },
  //   { Country: "Åland Islands", Total: 591.0 },
  //   { Country: "Cayman Islands", Total: 563.0 },
  //   { Country: "New Caledonia", Total: 562.0 },
  //   { Country: "Bermuda", Total: 562.0 },
  //   { Country: "Northern Mariana Islands", Total: 502.0 },
  //   { Country: "Myanmar", Total: 471.0 },
  //   { Country: "Curaçao", Total: 436.0 },
  //   { Country: "Barbados", Total: 416.0 },
  //   { Country: "Suriname", Total: 383.0 },
  //   { Country: "Lao People's Democratic Republic", Total: 381.0 },
  //   { Country: "Nigeria", Total: 357.0 },
  //   { Country: "Faroe Islands", Total: 348.0 },
  //   { Country: "Gibraltar", Total: 343.0 },
  //   { Country: "Guadeloupe", Total: 325.0 },
  //   { Country: "Libya", Total: 323.0 },
  //   { Country: "Nicaragua", Total: 318.0 },
  //   { Country: "Namibia", Total: 298.0 },
  //   { Country: "Aruba", Total: 278.0 },
  //   { Country: "Somalia", Total: 265.0 },
  //   { Country: "Belize", Total: 247.0 },
  //   { Country: "Virgin Islands, U.S.", Total: 247.0 },
  //   { Country: "Martinique", Total: 191.0 },
  //   { Country: "Guyana", Total: 167.0 },
  //   { Country: "Sint Maarten (Dutch part)", Total: 160.0 },
  //   { Country: "San Marino", Total: 152.0 },
  //   { Country: "Grenada", Total: 148.0 },
  //   { Country: "Dominica", Total: 147.0 },
  //   { Country: "French Polynesia", Total: 141.0 },
  //   { Country: "Senegal", Total: 139.0 },
  //   { Country: "Madagascar", Total: 136.0 },
  //   { Country: "Zimbabwe", Total: 130.0 },
  //   { Country: "Fiji", Total: 121.0 },
  //   { Country: "Botswana", Total: 112.0 },
  //   { Country: "Mozambique", Total: 104.0 },
  //   { Country: "Ghana", Total: 104.0 },
  //   { Country: "Mayotte", Total: 104.0 },
  //   { Country: "Monaco", Total: 104.0 },
  //   { Country: "Côte d'Ivoire", Total: 98.0 },
  //   { Country: "Yemen", Total: 92.0 },
  //   { Country: "Montserrat", Total: 88.0 },
  //   { Country: "Uganda", Total: 86.0 },
  //   { Country: "Liechtenstein", Total: 85.0 },
  //   { Country: "Afghanistan", Total: 80.0 },
  //   { Country: "Saint Kitts and Nevis", Total: 75.0 },
  //   { Country: "Saint Lucia", Total: 74.0 },
  //   { Country: "Tanzania, United Republic of", Total: 73.0 },
  //   { Country: "Micronesia, Federated States of", Total: 68.0 },
  //   { Country: "Angola", Total: 66.0 },
  //   { Country: "Andorra", Total: 65.0 },
  //   { Country: "Saint Martin (French part)", Total: 61.0 },
  //   { Country: "Saint Vincent and the Grenadines", Total: 59.0 },
  //   { Country: "French Guiana", Total: 58.0 },
  //   { Country: "Turks and Caicos Islands", Total: 55.0 },
  //   { Country: "Antigua and Barbuda", Total: 54.0 },
  //   { Country: "Mauritania", Total: 52.0 },
  //   { Country: "Seychelles", Total: 52.0 },
  //   { Country: "Rwanda", Total: 50.0 },
  //   { Country: "Zambia", Total: 48.0 },
  //   { Country: "American Samoa", Total: 46.0 },
  //   { Country: "Tajikistan", Total: 41.0 },
  //   { Country: "Greenland", Total: 40.0 },
  //   { Country: "Marshall Islands", Total: 33.0 },
  //   { Country: "Bhutan", Total: 33.0 },
  //   { Country: "Cameroon", Total: 29.0 },
  //   { Country: "Lesotho", Total: 24.0 },
  //   { Country: "Malawi", Total: 24.0 },
  //   { Country: "Djibouti", Total: 23.0 },
  //   { Country: "Ethiopia", Total: 18.0 },
  //   { Country: "Cabo Verde", Total: 16.0 },
  //   { Country: "Virgin Islands, British", Total: 15.0 },
  //   { Country: "Samoa", Total: 15.0 },
  //   { Country: "Sao Tome and Principe", Total: 13.0 },
  //   { Country: "Gabon", Total: 11.0 },
  //   { Country: "Saint Pierre and Miquelon", Total: 10.0 },
  //   { Country: "Liberia", Total: 9.0 },
  //   { Country: "Anguilla", Total: 7.0 },
  //   { Country: "Palau", Total: 6.0 },
  //   { Country: "Benin", Total: 6.0 },
  //   { Country: "Turkmenistan", Total: 6.0 },
  //   { Country: "Burkina Faso", Total: 5.0 },
  //   { Country: "Papua New Guinea", Total: 4.0 },
  //   { Country: "Mali", Total: 3.0 },
  //   { Country: "Congo, The Democratic Republic of the", Total: 3.0 },
  //   { Country: "Haiti", Total: 3.0 },
  //   { Country: "Guinea", Total: 3.0 },
];

const margin = { top: 20, right: 20, bottom: 50, left: 100 };
const width = 750 - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;

const svgCountries = d3
  .select("#countriesChart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const xScale = d3.scaleLinear().range([0, width]);
const yScale = d3.scaleBand().range([0, height]).padding(0.1);

// Apply scales to data
xScale.domain([0, d3.max(countriesBarChartData, (d) => d.Total)]);
yScale.domain(countriesBarChartData.map((d) => d.Country));

// Create bars
svgCountries
  .selectAll(".bar")
  .data(countriesBarChartData)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("y", (d) => yScale(d.Country))
  .attr("height", yScale.bandwidth())
  .attr("x", 0)
  .attr("width", (d) => xScale(d.Total))
  .attr("fill", (d) => {
    if (d.Country.startsWith("US")) {
      return "red";
    } else if (d.Country.startsWith("United Kingdom")) {
      return "#ff491c";
    } else {
      return "#808080";
    }
  })
  .attr("opacity", 0.75);

// Create axes
svgCountries.append("g").call(d3.axisLeft(yScale)).select(".domain").remove();

svgCountries
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));
