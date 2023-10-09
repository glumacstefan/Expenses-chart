window.onload = function() {
	const overlayer = document.querySelector(".js-overlayer");
	overlayer.style.display = "none";

	fetch("data.json")
		.then(response => response.json())
		.then(data => {
			console.log(data);

			const chartContainer = document.querySelector(".js-chart__container");

			let largestAmount = -1;
			let largestChartCell = null;

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

				const amount = element.amount;
				console.log(amount);

				if (amount > largestAmount) {
					largestAmount = amount;
					largestChartCell = chartCell;
				}
			});

			if (largestChartCell) {
				let chartBar = largestChartCell.querySelector(".chart__bar");
				chartBar.style.backgroundColor = getComputedStyle(
					document.documentElement
				).getPropertyValue("--chart-bar-alt");
				// TODO: Ubaciti sass varijablu umesto hsl-a
			}
		})
		.catch(error => console.log(error));

	setTimeout(triggerFunction, 500);

	function triggerFunction() {
		let card = document.querySelector(".js-card");
		card.classList.add("card--animated");
		card.style.opacity = "1";
	}
};
