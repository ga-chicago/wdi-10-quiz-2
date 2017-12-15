/*
let answer = {
    moreAnswers: [1,2,3,4,5],
    theresMore: {
        but: "wait",
    },
    manKind: function () {
        console.log("Nay, I am the world")
    }
}

//console.log(answer.moreAnswers[2])

//console.log(answer.theresMore.but);

//answer.manKind();
*/

let halo = {
    protag: "John",
    Power: "Plot armor"
}

let nier = ["Replicant", "Automata"]

let mario = () => {
    console.log("[Coinage intensifies]")
}

let zelda = {
    protag: "Link",
    games: ["Zelda 1", "Zelda 2", "zelda: A Link to the past"]
}


let games = [mario, "Zelda", halo, nier]

//console.log(games[2].protag)

//console.log(games[3][1])

//console.log(games[0]())

for (name in zelda) {
    console.log(name)
        for (let i = 0; i < zelda.games.length; i++){
            console.log(zelda.games[i])
    } 
    
};
