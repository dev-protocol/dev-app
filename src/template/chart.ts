import { ampImage } from './amp/amp-image'

export const chart = async () =>
	ampImage({
		alt: 'Downloads chart',
		src: '/public/lp/chart/2019-02.png',
		width: 2892,
		height: 1400,
		layout: 'responsive'
	})
