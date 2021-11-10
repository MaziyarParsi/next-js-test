import Head from 'next/head'
import style from '../../styles/ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	return {
		props: {
			ninjas: data,
		},
	}
}

const Ninjas = ({ ninjas }) => {
	return (
		<>
			<Head>
				<title>Ninja List | Ninjas</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1>All ninjas</h1>
				{ninjas.map((ninja) => (
					<Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
						<a className={style.single}>
							<h3>{ninja.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	)
}

export default Ninjas
