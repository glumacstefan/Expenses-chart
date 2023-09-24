const data = fetch("data.json")
	.then(response => response.json())
	.then(data => {
		console.log(data);
		return data;
	})
	.catch(error => console.log(error));

let chartContainer = document.querySelector(".js-chart__container");

data.then(data => {
	data.forEach(element => {
		console.log(element);

		let chartCell = document.createElement("div");
		chartCell.classList.add("chart__cell");
		chartCell.innerHTML = `<div class="chart__bar"></div><p class="chart__label">${element.day}</p>`;

		chartContainer.appendChild(chartCell);
	});
});
