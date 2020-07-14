export class Pockemon {
    id: number | null;
    name: Name;
    damage: number;
    isFree: boolean;
}

// export class Pockemon {
//     id: number ;
//     name: string;
//     damage: number;
//     isFree: boolean;
// }


export class Name {
    jp: string;
    eng: string;
}

export class PockemonAction {
    id: number;
    action: boolean;
}
