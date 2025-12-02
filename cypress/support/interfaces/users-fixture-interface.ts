export interface UserCredentials {
    username: string;
    password: string;
}

export interface NewUser {
    employeeName: string;
    username: string;
    password: string;
    userRole: string;
    status: string;
}

export interface UsersFixture {
    valid: UserCredentials;
    invalid: UserCredentials;
    newUser: NewUser;
}
