function parallaxMobile() {
	homeContainerDOM.addEventListener('touchmove', (e) => {
		homeIconsDOM.forEach((icon) => {
			const speed = icon.getAttribute('data-speed');
			const x = (window.innerWidth - e.pageX * speed) / 100;
			const y = (window.innerHeight - e.pageY * speed) / 100;
			icon.style.translate = `${x}px ${y}px`;
		});
	});
}

export default parallaxMobile