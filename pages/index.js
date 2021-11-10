import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h2 className={styles.title}>this is a homePage</h2>
				<p className={styles.text}>
					Amet deserunt ipsum esse voluptate eu labore ut consectetur.
					Veniam aute laboris pariatur id elit dolore. Nisi cupidatat
					reprehenderit veniam dolor exercitation amet aute ad duis
					nulla. Eiusmod magna do laboris veniam nostrud enim
					consectetur sunt voluptate mollit culpa aliqua esse
					cupidatat. Ipsum reprehenderit ad in excepteur ullamco
					commodo qui laboris nulla dolor pariatur. Sit consectetur
					nostrud dolor labore dolore dolor occaecat fugiat nostrud
					elit amet commodo est.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See ninja listing</a>
				</Link>
			</div>
		</>
	)
}
