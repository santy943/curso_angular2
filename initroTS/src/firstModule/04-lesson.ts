interface Skills{
    combate: string[],
    magia?: string[],
}
export interface Character{
    name: string;
    hp: number;
    skills: Skills;
    homeTown?: string;
}
interface Team{
    extraLife: number;
    characters: Character[];
}

const link: Character = {
    name: "Link",
    hp: 100,
    skills: {
        combate: ["espada", "arco"],
        magia: ["fuego"]
    }
}

const zelda: Character = {
    name: "Zelda",
    hp: 300,
    skills: {
        combate: ["arco", "cuerpo a cuerpo"],
        magia: ["curacion"]
    }
}

export function fuse( team: Team): number[] {
    let totalHp = 0;
    const { characters, extraLife } = team
    characters.forEach((character: Character) =>{
        const { hp } = character
        totalHp += hp
    })
    return [totalHp, totalHp * extraLife]
}

const teamMates = [zelda, link]
const extraLife = 0.70

const LinkZelda = fuse({
    extraLife,
    characters: teamMates
})


const {skills} = link;
const { combate: linkCombatSkills, magia: linkMagicSkulls } = skills
const [ combat1, combat2 ]: string[]  = linkCombatSkills


console.log(linkCombatSkills);
console.log(linkMagicSkulls);
console.log(combat2)
console.log("Vida: "+ LinkZelda[0]);
console.log("Bonus de vida: "+ LinkZelda[1]);


export {}