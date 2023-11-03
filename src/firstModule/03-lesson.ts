interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number )=>{
    character.hp += amount;
}

const link: Character = {
    name: "Link",
    hp: 50,
    showHp() {
        console.log(`vida actual ${ this.hp }`);
        
    },
}

console.table(link);

healCharacter(link, 20);
link.showHp();

healCharacter(link, 30);
link.showHp();

console.table(link);