import DarkModeButton from '../DarkModeButton';
import {Link} from 'react-router-dom'

const Settings = () => {
	const xButton = (
		<svg
			className='md:[translate:4rem_8rem] [translate:2.3rem_6.6rem]'
			width='32'
			height='28'
			viewBox='0 0 32 28'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.29716 1.74213e-08H30.532C30.9213 1.74213e-08 31.2947 0.163888 31.57 0.455612C31.8453 0.747335 32 1.143 32 1.55556V26.4444C32 26.857 31.8453 27.2527 31.57 27.5444C31.2947 27.8361 30.9213 28 30.532 28H9.29716C9.05553 28 8.81763 27.9369 8.60457 27.8161C8.39151 27.6954 8.20987 27.5208 8.07577 27.3078L0.246846 14.8633C0.0858945 14.6077 0 14.3073 0 14C0 13.6927 0.0858945 13.3923 0.246846 13.1367L8.07577 0.692222C8.20987 0.479241 8.39151 0.304628 8.60457 0.183875C8.81763 0.0631212 9.05553 -3.82967e-05 9.29716 1.74213e-08ZM10.0825 3.11111L3.23279 14L10.0825 24.8889H29.064V3.11111H10.0825ZM18.7879 11.8004L22.9394 7.39978L25.0167 9.60089L20.8636 14L25.0167 18.3991L22.9394 20.6002L18.7879 16.1996L14.6363 20.6002L12.5591 18.3991L16.7121 14L12.5591 9.60089L14.6363 7.39978L18.7879 11.8004Z'
				fill='var(--lighter-red, black)'
			/>
		</svg>
	);
	return (
		<>
			<Link to={'/'}>{xButton}</Link>
			<div className='flex items-center justify-center min-h-[100vh] gap-[2.2rem] text-[var(--lighter-blue,#29335C)]'>
				<span>Dark mode</span>
				<DarkModeButton />
			</div>
		</>
	);
};

export default Settings;
