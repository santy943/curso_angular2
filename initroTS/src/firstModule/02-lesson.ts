const skills: string[] = ["Espadachin", "Arquero", "Mago"];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}

const link: Character = {
    name: "Link",
    hp: 100,
    skills: ["Espadachin", "Arquero"]
}

link.homeTown = "Kokiri forest";

console.table(link);
export {}