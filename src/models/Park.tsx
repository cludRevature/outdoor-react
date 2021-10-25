import ParkImages from "./ParkImages";

export default interface Park{
    fullName : string,
    url : string,
    description : string,
    images : Array<ParkImages>
}