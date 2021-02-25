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
    const starting = function () {
        template.forEach(a => {
            a.forEach(b => {
                let newBox = document.createElement("div");
                newBox.classList.add("box")
                newBox.setAttribute("data-type", "removing")
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

    return {
        start: function () {
            return starting()
        }
    }
})();
landingPage.start()

//reseting game
const reset = (() => {
    const reseting = () => {
        const all = document.querySelectorAll(".box")
        try {
            all.forEach(a => a.remove())
        } catch (e) {
            console.log(e.target)
        }
    }
    return {
        restart: function () {
            reseting()
            landingPage.start();
        }
    }
})();

const game = (() => {
    const mining = () => {
        //check what kind of mining tool is
        //check if item is removable
        //remove the item class by its type
        //add to inventory
        console.log("mining")
    }
    const building = () => {
        //get inventory type
        //check if its editable
        //add to class to the elemnt selected 
        //remove from inventory
        console.log("building")
    }
    const removing = () => {
        //may be this will take data of truthy
        //this will class item from the element
        console.log("removing")
    }
   document.addEventListener("click",(e) => {
        switch(e.target.getAttribute("data-type")){
            case "mining":
                mining();
                break
            case "building":
                building();
                break
            case "removing":
                removing()
                break

        }
   });
})();