(function () {
	const toggle = document.getElementById('toggle')
	const mq = window.matchMedia('(prefers-color-scheme: dark)')
	const userTheme = localStorage.getItem('DARK')
	let dark

	if (userTheme) {
		dark = userTheme === 'true'
	} else {
		dark = mq.matches
	}

	if (dark) {
		document.body.classList.add('dark')
	}

	toggle.addEventListener('click', () => {
		dark = !dark
		localStorage.setItem('DARK', dark)
		document.body.classList.toggle('dark')
	})
})()