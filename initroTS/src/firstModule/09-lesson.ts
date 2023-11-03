
export interface Chatacter {
    name: string;
    skills?: string[];
}

const link: Chatacter = {
    name: 'Link',
    
}

const zelda: Chatacter = {
    name: 'Zelda',
    skills: ['Magia','Defenza'],
}

const returnSkillsNumber = ( Chatacter: Chatacter ): number => {

    const howManySkills = Chatacter.skills?.length || 0;

    console.log( Chatacter.name, howManySkills);

    return howManySkills;
}


returnSkillsNumber( link );