// const playGround = (() => {
//     const myWord = document.querySelector(".world")
//     const playGroundbox = () => {
//         for (let i = 0; i < (20 * 18); i++) {
//             let box = document.createElement("div");
//             box.classList.add("box")
//             box.innerHTML = i+1
//             myWord.appendChild(box)
//         }
//     }

//     return playGroundbox()
// })();
// const gameStart = (() => {
//     const boxes = document.querySelectorAll(".box")
//     //add by type at index and start
//     const addBoxTypeAtIdx = (num, idx, type) => {
//         let i = 0
//         while (i < num) {
//             boxes[idx + i].removeAttribute('class')
//             boxes[idx + i].classList.add("box")
//             boxes[idx + i].classList.add(`${type}`)
//             i++
//         }
//     }

//     return {
//         start: function () {
//             console.log("start");
//             addBoxTypeAtIdx()
//             addBoxTypeAtIdx(120, 240, "earth"), addBoxTypeAtIdx(1, 65, "cloud"), addBoxTypeAtIdx(4, 83, "cloud")
//             addBoxTypeAtIdx(2, 88, "cloud"), addBoxTypeAtIdx(8, 102, "cloud"), addBoxTypeAtIdx(2, 126, "cloud")
//             addBoxTypeAtIdx(1, 204, "grass"), addBoxTypeAtIdx(3, 223, "grass"),
//             addBoxTypeAtIdx(2, 233, "rock"), addBoxTypeAtIdx(1, 239, "rock"),
//             addBoxTypeAtIdx(1, 196, "trunk"), addBoxTypeAtIdx(1, 216, "trunk"), addBoxTypeAtIdx(1, 236, "trunk")
//             addBoxTypeAtIdx(3, 135, "grass"), addBoxTypeAtIdx(3, 155, "grass"), addBoxTypeAtIdx(3, 175, "grass")
//         }
//     }
// })()
// gameStart.start()


// const gomeRestart = (() => {
//     document.querySelector(".restart").addEventListener("click", () => gameStart.start());
// })();