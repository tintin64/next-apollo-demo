type Address = {
    street: String,
    city: String,
    zipcode: String
}

export type User = {
    name: String,
    email: String,
    phone: String,
    address: Address
}

export type UsersType = {
    count: Number,
    result: Array<User>
}

export type UsersListProps = {
    [key: string]: any,
    users?: UsersType
}
