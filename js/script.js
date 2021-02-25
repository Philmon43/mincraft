//starting the game
const landingPage = (() => {
    const myWorld = document.querySelector(".world");
    const template = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
        [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 3, 0, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    ]
    const starting = function(){
        template.forEach(a => {
            a.forEach(b => {
                let newBox = document.createElement("div");
                newBox.classList.add("box")
                myWorld.appendChild(newBox)
                switch (b) {
                    case 1:
                        newBox.classList.add("cloud")
                        break;
                    case 2:
                        newBox.classList.add("grass")
                        break;
                    case 3:
                        newBox.classList.add("trunk")
                        break;
                    case 4:
                        newBox.classList.add("rock")
                        break;
                    case 5:
                        newBox.classList.add("earth")
                        break;
                }
            });
        });
    }

    return{
        start: function(){
            return starting()
        }
    }
})();
landingPage.start()

const game = (() => {
    const game = "i am game page";
    return {
        init: function () {
            console(game)
        }
    }
})();


//reseting game
const reset = (() => {
    const reseting = () => {
    const all = document.querySelectorAll(".box")
    try{
        if(all){
            all.forEach(a => a.remove())
        }
    }catch(e){
        console.log(e)
    }
    }
    return {
        restart: function () {
            reseting()
            landingPage.start();
        }
    }
})();

