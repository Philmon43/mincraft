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
            a.forEach((b, i) => {
                let newBox = document.createElement("div");
                newBox.classList.add("box")
                newBox.setAttribute("data-type", "removing")
                newBox.setAttribute("data-id", i)
                myWorld.appendChild(newBox)
                switch (b) {
                    case 0:
                        newBox.setAttribute("data-id", "sky")
                        break
                    case 1:
                        newBox.classList.add("cloud")
                        newBox.setAttribute("data-name", "cloud")
                        break;
                    case 2:
                        newBox.classList.add("grass")
                        newBox.setAttribute("data-name", "grass")
                        break;
                    case 3:
                        newBox.classList.add("trunk")
                        newBox.setAttribute("data-name", "trunk")
                        break;
                    case 4:
                        newBox.classList.add("rock")
                        newBox.setAttribute("data-name", "rock")
                        break;
                    case 5:
                        newBox.classList.add("earth")
                        newBox.setAttribute("data-name", "earth")
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

//game play
const game = (() => {
    const mineCraft = {
        tool: "",
        inventory: [],
        primary: "rgba(0, 47, 255, 0.5)",
        danger: "rgba(255, 0, 0, 0.5)"
    }
    const mining = (el) => {
        //try removing if there is prevouse element behavior
        try {
            mineCraft.tool.style.removeProperty("background-color")
        } catch (e) {}
        //add behavior to current element
        mineCraft.tool = el
        mineCraft.tool.style.backgroundColor = mineCraft.primary
    }
    const building = () => {
        //get inventory type
        //check if its editable
        //add to class to the elemnt selected 
        //remove from inventory
        console.log("building")
    }
    const removingEl = (el) => {
        //check if there is tool selected
        if (!mineCraft.tool) return
        //check if the tool can remove the element
        const toolType = mineCraft.tool.getAttribute("data-tool")
        const dataId = el.getAttribute("data-id");
        const dataName = el.getAttribute("data-name");
        if(toolType === "pickaxe" && dataName === "rock"){
            console.log("you can break")
        }else if(toolType === "shovel" && dataName === "earth"){
            console.log("you can dig")
        }else if(toolType === "axe" && dataName === "trunk" || toolType === "axe" && dataName === "grass"){
            console.log("you can cut")
        }else{
            console.log("what the fuck are you doing")
        }
        //if not dispaly color red to the tool you cant remove 
        //later remove the element
        //add to inventory

        console.log(toolType, dataId, dataName)
    }
    document.addEventListener("click", (e) => {
        switch (e.target.getAttribute("data-type")) {
            case "mining":
                mining(e.target);
                break
            case "building":
                building(e.target);
                break
            case "removing":
                removingEl(e.target)
                break

        }
    });
})();