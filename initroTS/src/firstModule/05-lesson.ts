import { Character, fuse } from "./04-lesson"

const teamMates: Character[] = [
     {
        name: "Link",
        hp: 100,
        skills: {
            combate: ["espada", "arco"],
            magia: ["fuego"]
        }
    },{
        name: "Zelda",
        hp: 300,
        skills: {
            combate: ["arco", "cuerpo a cuerpo"],
            magia: ["curacion"]
        }
    }
]

const [vida, vidaBonus] = fuse({
    extraLife: 0.4,
    characters: teamMates
})

console.log("Vida import: "+ vida);
console.log("Bonus de vida import: "+ vidaBonus);

export{}