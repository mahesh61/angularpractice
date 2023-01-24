

export interface User {
    Name: string,
    UserId: number | string,
    EmailId: string,
    Mobile: string,
    IPAddress: string
    Address: Address,

}

interface Address {
    Street: string,
    City: string,
    District: string,
    Pincode: number,
    Country: string
}