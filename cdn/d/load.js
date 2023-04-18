window.addEventListener("load", function() {
	const loader = document.querySelector(".loader");
	const progressBar = document.querySelector(".bar");
	const progressContainer = document.querySelector(".progress");
	let loaded = 0;

	function updateProgress() {
		loaded += 1;
		let progress = (loaded / 100) * progressContainer.offsetWidth;
		progressBar.style.width = progress + "px";
		if (loaded === 100) {
			loader.classList.add("hidden");
			progressContainer.classList.add("hidden");
		}
	}

	const iframe = document.querySelector("iframe");
	iframe.addEventListener("load", function() {
		setInterval(updateProgress, 10);
	});
});
