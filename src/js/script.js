window.onload = function() {
	const overlayer = document.querySelector(".js-overlayer");
	overlayer.style.display = "none";

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
			let chartCell = document.createElement("div");

			chartCell.classList.add("chart__cell");
			chartCell.innerHTML = `
		<div class="chart__amount">$${element.amount}</div>
			<div class="chart__cell-wrapper">
			<div class="chart__bar" style="height:${element.amount * 2.5}px">
			</div>
			<p class="chart__label">${element.day}</p>
			</div>`;

			chartContainer.appendChild(chartCell);
		});
	});

	setTimeout(triggerFunction, 500);

	function triggerFunction() {
		let card = document.querySelector(".js-card");
		card.classList.add("card--animated");
		card.style.opacity = "1";
	}
};
