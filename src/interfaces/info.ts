export default interface IInfo {
    name: string;
    age: number;
    children: {
        id?: number;
        name: string;
        age: number;
    }[]
}