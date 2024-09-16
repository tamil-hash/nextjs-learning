import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@/assets/logo.png';
import classes from './MainHeader.module.css';
import MainHeaderBackgroud from '@/components/MainHeaderBackgroud';
import NavLink from '@/components/NavLink/NavLink';

export default function MainHeader() {
	const navList = [
		{ url: '/meals', text: 'Browse Meals' },
		{ url: '/community', text: 'Foodies Community' },
	];

	return (
		<>
			<MainHeaderBackgroud />
			<header className={classes.header}>
				<NavLink url="/" className={classes.logo}>
					<Image src={LogoImg} alt="food plate" priority />
					NextLevel Food
				</NavLink>
				<nav className={classes.nav}>
					<ul>
						{navList.map(({ url, text }) => (
							<li>
								<NavLink url={url}>{text}</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}
