const btn = document.querySelector('button')

btn.addEventListener('mouseover', function() {
    console.log('u didit')
    const height = Math.floor(Math.random() * window.innerHeight)
    const width = Math.floor(Math.random() * window.innerWidth)
    btn.style.left = `${width}px`
    btn.style.top = `${height}px`
})

btn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green'
    btn.innerHTML = 'YOU DID IT !'
    btn.style.left = '50vw'
    btn.style.top = '50vh'
})