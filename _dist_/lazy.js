const isIntersecting = (entry)=>{
	return entry.isIntersecting  //true dentro de la pantalla
}

const loadImage = (entry)=>{
	const container = entry.target   //div
	console.log('holis')
	const image = container.firstChild
	const url = image.dataset.src
	//load image
	image.src=url
	//desregistra la imagen
	observer.unobserve(container)
}
const observer = new IntersectionObserver((entries)=>{
	entries
		.filter(isIntersecting)
		.forEach(loadImage)
}
)

const registerImage = (image)=>{
	observer.observe(image)
}

export default registerImage