const DROPS_NUMBER = 100


function initDrops() {
    for (let i = 0; i < DROPS_NUMBER; i++) {
        document.body.appendChild(<div class="drop"></div>)
    }    
}