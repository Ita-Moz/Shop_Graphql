function Tag({ children, className }) {
	return (
		<div>
			<a className={` ${className} `} href="#">
				{children}
			</a>
		</div>
	)
}

export default Tag
