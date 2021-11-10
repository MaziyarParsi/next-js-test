import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const notFound = () => {
	const router = useRouter()
	const [second, setSecond] = useState(3)

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [])
	useEffect(() => {
		setTimeout(() => {
			setSecond(second - 1)
		}, 1000)
	}, [second])

	return (
		<div className="not-found">
			<h1>Ooops...</h1>
			<h2>that page cannot be found</h2>
			<p>
				Go bacl to the
				<Link href="/">
					<a>Home</a>
				</Link>
				{second}
			</p>
		</div>
	)
}

export default notFound
