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

//game play
const game = (() => {
    const mineCraft = {
        tool: "",
        inventory: [],
        primary: "rgba(0, 47, 255, 0.5)",
        danger: "rgba(255, 0, 0, 0.5)"
    }

    //get element remove and add to inventory and display inventory box
    const remove = (t) => {
        const myInventory = document.querySelector(".current_inventory");
        mineCraft.inventory.unshift(t)
        t.classList.remove(t.classList[1])
        myInventory.style.backgroundImage = `url("./img/${mineCraft.inventory[0].getAttribute("data-name")}.png")`
        myInventory.style.backgroundSize = "cover"
    }
    //update
    const updating = (el) => {
        //try removing if there is prevouse element behavior
        try {
            mineCraft.tool.style.removeProperty("background-color")
        } catch (e) {}
        //updaing tool
        mineCraft.tool = el
        //add behavior to current element
        mineCraft.tool.style.backgroundColor = mineCraft.primary
    }
    //mining send uodate
    const mining = (el) => updating(el);

    //inventory  send update
    const inventory = (el) => updating(el);

    const removingEl = (el) => {
        //check if there is tool selected
        if (!mineCraft.tool) return
        //check if the tool can remove the element
        const toolType = mineCraft.tool.getAttribute("data-tool")
        const dataName = el.getAttribute("data-name");
        if (toolType === "pickaxe" && dataName === "rock") {
            remove(el)
        } else if (toolType === "shovel" && dataName === "earth") {
            remove(el)
        } else if (toolType === "axe" && dataName === "trunk" || toolType === "axe" && dataName === "grass") {
            remove(el)
        } else if (mineCraft.tool.getAttribute("data-type") === "mining") {
            //if not dispaly color red some milisecond
            mineCraft.tool.style.backgroundColor = mineCraft.danger
            setTimeout(() => {
                mineCraft.tool.style.backgroundColor = mineCraft.primary
            }, 300);
            //adding data from inventory back to empty box
        } else if (toolType === "inventory") {
            if(mineCraft.inventory.length === 0)return
            console.log("i am here", el)
        }
    }
    document.addEventListener("click", (e) => {
        switch (e.target.getAttribute("data-type")) {
            case "mining":
                mining(e.target);
                break
            case "inventory":
                inventory(e.target);
                break
            case "removing":
                removingEl(e.target)
                break
        }
    });
})();