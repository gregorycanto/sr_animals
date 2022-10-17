export interface Animal {
    type: string;
    avatar: string;
    name: string;
    id: number;
}

export interface AnimalList {
    items: Animal[];
}