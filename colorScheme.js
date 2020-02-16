export const useColorScheme = () => {
	const mq = window.matchMedia('(prefers-color-scheme: dark)')
	const dark = mq.matches

	if (dark) {
		document.body.classList.add('dark')
	}

	mq.addListener(() => {
		if (mq.matches) {
			document.body.classList.add('dark')
		}
	})
}
