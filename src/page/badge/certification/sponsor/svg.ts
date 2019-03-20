import { html } from '../../../../lib/html'
import { Sponsor, PersonalSponsor } from '../../../../store/sponsors'
import { tierToSymbol } from '../../../../lib/tier-to-symbol'
import { bronze } from '../../../../style/color'

export const svg = async (data: Sponsor | PersonalSponsor) => html`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
		id="Layer_1"
		x="0px"
		y="0px"
		viewBox="0 0 384 117"
		style="enable-background:new 0 0 384 117;"
		xml:space="preserve"
	>
		<style type="text/css">
			.st0 {
				fill: #ffffff;
			}
			.st1 {
				fill: #e5e5e5;
				stroke: #808080;
				stroke-width: 2;
			}
			.st2 {
				fill: url(#SVGID_1_);
			}
			.tier.gold {
				fill: #e3c05b;
			}
			.tier.silver {
				fill: silver;
			}
			.tier.bronze {
				fill: ${bronze};
			}
			.st5 {
				font-size: 14px;
			}
		</style>
		<rect class="st0" width="384" height="117" />
		<rect x="1" y="1" class="st1" width="382" height="115" />
		<linearGradient
			id="SVGID_1_"
			gradientUnits="userSpaceOnUse"
			x1="2"
			y1="5.5"
			x2="380.1225"
			y2="5.5"
			gradientTransform="matrix(1 0 0 -1 0 118)"
		>
			<stop offset="0" style="stop-color:#00EBFF" />
			<stop offset="0.35" style="stop-color:#F200DF" />
			<stop offset="1" style="stop-color:#FF4700" />
		</linearGradient>
		<path class="st2" d="M382,110H2v5h380V110z" />
		<path
			d="M26.6,78.5c-3,0-5.7-0.6-8.1-1.9c-2.4-1.3-4.3-3.1-5.7-5.4c-1.4-2.3-2.1-4.9-2.1-7.9s0.7-5.5,2.1-7.8  c1.4-2.3,3.3-4.1,5.7-5.4c2.4-1.3,5.2-2,8.2-2c2.5,0,4.8,0.4,6.9,1.3c2.1,0.9,3.8,2.2,5.2,3.9l-4.4,4c-2-2.3-4.5-3.4-7.4-3.4  c-1.8,0-3.4,0.4-4.9,1.2c-1.4,0.8-2.5,1.9-3.4,3.3c-0.8,1.4-1.2,3.1-1.2,4.9c0,1.8,0.4,3.4,1.2,4.9c0.8,1.4,1.9,2.5,3.4,3.4  c1.4,0.8,3.1,1.2,4.9,1.2c2.9,0,5.4-1.2,7.4-3.5l4.4,4c-1.4,1.7-3.1,3-5.2,3.9C31.4,78.1,29.1,78.5,26.6,78.5z"
		/>
		<path
			d="M66.1,72.5V78H43.3V48.6h22.2v5.5H50.1v6.4h13.6v5.3H50.1v6.8H66.1z"
		/>
		<path
			d="M90.2,78l-5.7-8.2h-6.3V78h-6.8V48.6h12.7c2.6,0,4.9,0.4,6.8,1.3c1.9,0.9,3.4,2.1,4.5,3.7c1,1.6,1.6,3.5,1.6,5.7  c0,2.2-0.5,4.1-1.6,5.7c-1,1.6-2.5,2.8-4.5,3.6l6.6,9.5H90.2z M90.1,59.3c0-1.7-0.5-2.9-1.6-3.8c-1.1-0.9-2.6-1.3-4.7-1.3h-5.5v10.2  h5.5c2,0,3.6-0.4,4.7-1.3C89.5,62.2,90.1,60.9,90.1,59.3z"
		/>
		<path d="M108,54.1h-9.4v-5.5h25.6v5.5h-9.4V78H108V54.1z" />
		<path d="M127.9,48.6h6.8V78h-6.8V48.6z" />
		<path d="M148.5,54.1v7.8h13.6v5.5h-13.6V78h-6.8V48.6h22.2v5.5H148.5z" />
		<path d="M168.5,48.6h6.8V78h-6.8V48.6z" />
		<path
			d="M205.1,72.5V78h-22.8V48.6h22.2v5.5h-15.5v6.4h13.7v5.3h-13.7v6.8H205.1z"
		/>
		<path
			d="M210.5,48.6h13.4c3.2,0,6,0.6,8.4,1.8c2.5,1.2,4.4,2.9,5.7,5.1c1.4,2.2,2.1,4.8,2.1,7.7s-0.7,5.5-2.1,7.7  c-1.3,2.2-3.2,3.9-5.7,5.2c-2.4,1.2-5.3,1.8-8.4,1.8h-13.4V48.6z M223.5,72.4c2.9,0,5.3-0.8,7-2.4c1.8-1.7,2.6-3.9,2.6-6.7  s-0.9-5-2.6-6.6c-1.7-1.7-4.1-2.5-7-2.5h-6.2v18.2H223.5z"
		/>
		<path
			d="M18.3,38.2c-1.6,0-3-0.3-4.2-1c-1.3-0.7-2.3-1.6-3-2.8c-0.7-1.2-1.1-2.6-1.1-4.1s0.4-2.8,1.1-4c0.7-1.2,1.7-2.2,3-2.8  c1.3-0.7,2.7-1,4.2-1c1.6,0,3,0.3,4.2,1c1.3,0.7,2.3,1.6,3,2.8c0.7,1.2,1.1,2.6,1.1,4.1c0,1.5-0.4,2.9-1.1,4.1  c-0.7,1.2-1.7,2.1-3,2.8C21.2,37.9,19.8,38.2,18.3,38.2z M18.3,35.7c1,0,2-0.2,2.8-0.7c0.8-0.5,1.5-1.1,1.9-1.9  c0.5-0.8,0.7-1.8,0.7-2.8c0-1-0.2-2-0.7-2.8c-0.5-0.8-1.1-1.5-1.9-1.9c-0.8-0.5-1.7-0.7-2.8-0.7c-1,0-2,0.2-2.8,0.7  c-0.8,0.5-1.5,1.1-1.9,1.9c-0.5,0.8-0.7,1.7-0.7,2.8c0,1,0.2,2,0.7,2.8c0.5,0.8,1.1,1.5,1.9,1.9C16.3,35.5,17.2,35.7,18.3,35.7z"
		/>
		<path
			d="M35.9,22.6c1.3,0,2.5,0.2,3.5,0.7c1,0.4,1.8,1.1,2.3,1.9c0.5,0.8,0.8,1.8,0.8,2.9c0,1.1-0.3,2.1-0.8,2.9  c-0.5,0.8-1.3,1.5-2.3,1.9c-1,0.4-2.1,0.7-3.5,0.7h-3.5V38h-2.9V22.6H35.9z M35.8,31.1c1.2,0,2.2-0.3,2.8-0.8c0.6-0.5,1-1.3,1-2.3  c0-1-0.3-1.7-1-2.3C38,25.3,37,25,35.8,25h-3.3v6.1H35.8z"
		/>
		<path d="M56.9,35.6V38H45.3V22.6h11.2V25h-8.4v4h7.4v2.4h-7.4v4.2H56.9z" />
		<path
			d="M73.8,22.6V38h-2.4l-8.5-10.4V38h-2.8V22.6h2.4L70.9,33V22.6H73.8z"
		/>
		<path
			d="M88.7,38.2c-1.2,0-2.3-0.2-3.5-0.5c-1.1-0.3-2-0.8-2.6-1.3l1-2.2c0.6,0.5,1.4,0.9,2.3,1.2c0.9,0.3,1.8,0.5,2.8,0.5  c1.1,0,2-0.2,2.6-0.5c0.6-0.4,0.9-0.9,0.9-1.5c0-0.4-0.2-0.8-0.5-1.1c-0.3-0.3-0.7-0.5-1.2-0.7c-0.5-0.2-1.1-0.3-2-0.6  c-1.2-0.3-2.1-0.6-2.9-0.8c-0.7-0.3-1.3-0.7-1.9-1.3C83.3,28.8,83,28,83,27c0-0.9,0.2-1.6,0.7-2.3c0.5-0.7,1.2-1.3,2.1-1.7  c0.9-0.4,2.1-0.6,3.4-0.6c0.9,0,1.9,0.1,2.8,0.4c0.9,0.2,1.7,0.6,2.4,1L93.4,26c-0.7-0.4-1.4-0.7-2.1-0.9c-0.7-0.2-1.4-0.3-2.1-0.3  c-1.1,0-2,0.2-2.5,0.6c-0.5,0.4-0.8,0.9-0.8,1.5c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.7,0.5,1.2,0.7c0.5,0.2,1.1,0.3,2,0.5  c1.1,0.3,2.1,0.5,2.8,0.8c0.7,0.3,1.4,0.7,1.9,1.3c0.5,0.6,0.8,1.4,0.8,2.4c0,0.9-0.2,1.6-0.7,2.3c-0.5,0.7-1.2,1.2-2.1,1.7  C91.2,38,90.1,38.2,88.7,38.2z"
		/>
		<path
			d="M105,38.2c-1.6,0-3-0.3-4.2-1c-1.3-0.7-2.3-1.6-3-2.8c-0.7-1.2-1.1-2.6-1.1-4.1s0.4-2.8,1.1-4c0.7-1.2,1.7-2.2,3-2.8  c1.3-0.7,2.7-1,4.2-1c1.6,0,3,0.3,4.2,1c1.3,0.7,2.3,1.6,3,2.8c0.7,1.2,1.1,2.6,1.1,4.1c0,1.5-0.4,2.9-1.1,4.1  c-0.7,1.2-1.7,2.1-3,2.8C108,37.9,106.6,38.2,105,38.2z M105,35.7c1,0,2-0.2,2.8-0.7c0.8-0.5,1.5-1.1,1.9-1.9  c0.5-0.8,0.7-1.8,0.7-2.8c0-1-0.2-2-0.7-2.8c-0.5-0.8-1.1-1.5-1.9-1.9c-0.8-0.5-1.7-0.7-2.8-0.7c-1,0-2,0.2-2.8,0.7  c-0.8,0.5-1.5,1.1-1.9,1.9c-0.5,0.8-0.7,1.7-0.7,2.8c0,1,0.2,2,0.7,2.8c0.5,0.8,1.1,1.5,1.9,1.9C103,35.5,104,35.7,105,35.7z"
		/>
		<path
			d="M122.9,38.2c-2.1,0-3.8-0.6-5-1.8c-1.2-1.2-1.8-2.9-1.8-5.1v-8.7h2.9v8.6c0,3,1.3,4.5,3.9,4.5c2.6,0,3.9-1.5,3.9-4.5v-8.6  h2.8v8.7c0,2.2-0.6,3.9-1.8,5.1C126.7,37.6,125.1,38.2,122.9,38.2z"
		/>
		<path
			d="M143.8,38l-3.1-4.5c-0.1,0-0.3,0-0.6,0h-3.5V38h-2.9V22.6h6.3c1.3,0,2.5,0.2,3.5,0.7c1,0.4,1.8,1.1,2.3,1.9  c0.5,0.8,0.8,1.8,0.8,2.9c0,1.2-0.3,2.2-0.9,3c-0.6,0.8-1.4,1.5-2.4,1.9l3.5,5.1H143.8z M143.7,28.1c0-1-0.3-1.7-1-2.3  c-0.6-0.5-1.6-0.8-2.8-0.8h-3.3v6.1h3.3c1.2,0,2.2-0.3,2.8-0.8C143.4,29.8,143.7,29.1,143.7,28.1z"
		/>
		<path
			d="M156.9,38.2c-1.6,0-3-0.3-4.2-1c-1.2-0.7-2.2-1.6-2.9-2.8c-0.7-1.2-1.1-2.6-1.1-4.1c0-1.5,0.4-2.9,1.1-4.1  c0.7-1.2,1.7-2.1,2.9-2.8c1.3-0.7,2.7-1,4.2-1c1.3,0,2.4,0.2,3.5,0.7s1.9,1.1,2.6,1.9l-1.8,1.7c-1.1-1.2-2.5-1.8-4.1-1.8  c-1.1,0-2,0.2-2.8,0.7c-0.8,0.5-1.5,1.1-2,1.9c-0.5,0.8-0.7,1.8-0.7,2.8c0,1,0.2,2,0.7,2.8c0.5,0.8,1.1,1.5,2,1.9  c0.8,0.5,1.8,0.7,2.8,0.7c1.6,0,3-0.6,4.1-1.8l1.8,1.8c-0.7,0.8-1.6,1.5-2.7,1.9C159.3,38,158.2,38.2,156.9,38.2z"
		/>
		<path d="M177.3,35.6V38h-11.5V22.6H177V25h-8.4v4h7.4v2.4h-7.4v4.2H177.3z" />
		<path
			d="M191.3,38.2c-1.2,0-2.3-0.2-3.5-0.5c-1.1-0.3-2-0.8-2.6-1.3l1-2.2c0.6,0.5,1.4,0.9,2.3,1.2c0.9,0.3,1.8,0.5,2.8,0.5  c1.1,0,2-0.2,2.6-0.5c0.6-0.4,0.9-0.9,0.9-1.5c0-0.4-0.2-0.8-0.5-1.1c-0.3-0.3-0.7-0.5-1.2-0.7c-0.5-0.2-1.1-0.3-2-0.6  c-1.2-0.3-2.1-0.6-2.9-0.8c-0.7-0.3-1.3-0.7-1.9-1.3c-0.5-0.6-0.8-1.4-0.8-2.4c0-0.9,0.2-1.6,0.7-2.3c0.5-0.7,1.2-1.3,2.1-1.7  c0.9-0.4,2.1-0.6,3.4-0.6c0.9,0,1.9,0.1,2.8,0.4c0.9,0.2,1.7,0.6,2.4,1L196,26c-0.7-0.4-1.4-0.7-2.1-0.9c-0.7-0.2-1.4-0.3-2.1-0.3  c-1.1,0-2,0.2-2.5,0.6c-0.5,0.4-0.8,0.9-0.8,1.5c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.7,0.5,1.2,0.7c0.5,0.2,1.1,0.3,2,0.5  c1.1,0.3,2.1,0.5,2.8,0.8c0.7,0.3,1.4,0.7,1.9,1.3c0.5,0.6,0.8,1.4,0.8,2.4c0,0.9-0.2,1.6-0.7,2.3c-0.5,0.7-1.2,1.2-2.1,1.7  C193.8,38,192.7,38.2,191.3,38.2z"
		/>
		<path
			d="M206.7,22.6c1.3,0,2.5,0.2,3.5,0.7c1,0.4,1.8,1.1,2.3,1.9c0.5,0.8,0.8,1.8,0.8,2.9c0,1.1-0.3,2.1-0.8,2.9  c-0.5,0.8-1.3,1.5-2.3,1.9c-1,0.4-2.1,0.7-3.5,0.7h-3.5V38h-2.9V22.6H206.7z M206.6,31.1c1.2,0,2.2-0.3,2.8-0.8c0.6-0.5,1-1.3,1-2.3  c0-1-0.3-1.7-1-2.3c-0.6-0.5-1.6-0.8-2.8-0.8h-3.3v6.1H206.6z"
		/>
		<path
			d="M223.6,38.2c-1.6,0-3-0.3-4.2-1c-1.3-0.7-2.3-1.6-3-2.8c-0.7-1.2-1.1-2.6-1.1-4.1s0.4-2.8,1.1-4c0.7-1.2,1.7-2.2,3-2.8  c1.3-0.7,2.7-1,4.2-1c1.6,0,3,0.3,4.2,1c1.3,0.7,2.3,1.6,3,2.8c0.7,1.2,1.1,2.6,1.1,4.1c0,1.5-0.4,2.9-1.1,4.1  c-0.7,1.2-1.7,2.1-3,2.8C226.6,37.9,225.1,38.2,223.6,38.2z M223.6,35.7c1,0,1.9-0.2,2.8-0.7c0.8-0.5,1.5-1.1,1.9-1.9  c0.5-0.8,0.7-1.8,0.7-2.8c0-1-0.2-2-0.7-2.8c-0.5-0.8-1.1-1.5-1.9-1.9c-0.8-0.5-1.7-0.7-2.8-0.7c-1,0-2,0.2-2.8,0.7  c-0.8,0.5-1.5,1.1-1.9,1.9c-0.5,0.8-0.7,1.7-0.7,2.8c0,1,0.2,2,0.7,2.8c0.5,0.8,1.1,1.5,1.9,1.9C221.6,35.5,222.5,35.7,223.6,35.7z"
		/>
		<path
			d="M248.6,22.6V38h-2.4l-8.5-10.4V38h-2.8V22.6h2.4l8.5,10.4V22.6H248.6z"
		/>
		<path
			d="M257.5,38.2c-1.2,0-2.3-0.2-3.5-0.5c-1.1-0.3-2-0.8-2.6-1.3l1-2.2c0.6,0.5,1.4,0.9,2.3,1.2c0.9,0.3,1.8,0.5,2.8,0.5  c1.1,0,2-0.2,2.6-0.5c0.6-0.4,0.9-0.9,0.9-1.5c0-0.4-0.2-0.8-0.5-1.1c-0.3-0.3-0.7-0.5-1.2-0.7c-0.5-0.2-1.1-0.3-2-0.6  c-1.2-0.3-2.1-0.6-2.9-0.8c-0.7-0.3-1.3-0.7-1.9-1.3c-0.5-0.6-0.8-1.4-0.8-2.4c0-0.9,0.2-1.6,0.7-2.3c0.5-0.7,1.2-1.3,2.1-1.7  c0.9-0.4,2.1-0.6,3.4-0.6c0.9,0,1.9,0.1,2.8,0.4c0.9,0.2,1.7,0.6,2.4,1l-0.9,2.2c-0.7-0.4-1.4-0.7-2.1-0.9c-0.7-0.2-1.4-0.3-2.1-0.3  c-1.1,0-2,0.2-2.5,0.6c-0.5,0.4-0.8,0.9-0.8,1.5c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.7,0.5,1.2,0.7c0.5,0.2,1.1,0.3,2,0.5  c1.1,0.3,2.1,0.5,2.8,0.8c0.7,0.3,1.4,0.7,1.9,1.3c0.5,0.6,0.8,1.4,0.8,2.4c0,0.9-0.2,1.6-0.7,2.3c-0.5,0.7-1.2,1.2-2.1,1.7  C260,38,258.8,38.2,257.5,38.2z"
		/>
		<path
			d="M273.7,38.2c-1.6,0-3-0.3-4.2-1c-1.3-0.7-2.3-1.6-3-2.8c-0.7-1.2-1.1-2.6-1.1-4.1s0.4-2.8,1.1-4c0.7-1.2,1.7-2.2,3-2.8  c1.3-0.7,2.7-1,4.2-1c1.6,0,3,0.3,4.2,1c1.3,0.7,2.3,1.6,3,2.8c0.7,1.2,1.1,2.6,1.1,4.1c0,1.5-0.4,2.9-1.1,4.1  c-0.7,1.2-1.7,2.1-3,2.8C276.7,37.9,275.3,38.2,273.7,38.2z M273.7,35.7c1,0,2-0.2,2.8-0.7c0.8-0.5,1.5-1.1,1.9-1.9  c0.5-0.8,0.7-1.8,0.7-2.8c0-1-0.2-2-0.7-2.8c-0.5-0.8-1.1-1.5-1.9-1.9c-0.8-0.5-1.7-0.7-2.8-0.7c-1,0-2,0.2-2.8,0.7  c-0.8,0.5-1.5,1.1-1.9,1.9c-0.5,0.8-0.7,1.7-0.7,2.8c0,1,0.2,2,0.7,2.8c0.5,0.8,1.1,1.5,1.9,1.9C271.8,35.5,272.7,35.7,273.7,35.7z"
		/>
		<path
			d="M295.1,38l-3.1-4.5c-0.1,0-0.3,0-0.6,0h-3.5V38h-2.9V22.6h6.3c1.3,0,2.5,0.2,3.5,0.7c1,0.4,1.8,1.1,2.3,1.9  c0.5,0.8,0.8,1.8,0.8,2.9c0,1.2-0.3,2.2-0.9,3c-0.6,0.8-1.4,1.5-2.4,1.9l3.5,5.1H295.1z M295.1,28.1c0-1-0.3-1.7-1-2.3  c-0.6-0.5-1.6-0.8-2.8-0.8h-3.3v6.1h3.3c1.2,0,2.2-0.3,2.8-0.8C294.7,29.8,295.1,29.1,295.1,28.1z"
		/>
		<circle
			class="tier ${tierToSymbol(data.tier)}"
			cx="341.5"
			cy="63.5"
			r="19.5"
		/>
		<text transform="matrix(1 0 0 1 10.6379 97.9599)" class="st4 st5">
			${data.name}
		</text>
	</svg>
`
