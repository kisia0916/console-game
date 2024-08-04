const fps = 20
const items = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'.split('')
let counter = 0
setInterval(()=>{
	const itemIndex = counter%10
	counter+=1
	process.stdout.write(`\r \r${items[itemIndex]}`)
},1000/fps)
