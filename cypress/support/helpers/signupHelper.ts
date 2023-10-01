const baseUrl = 'https://conduit.productionready.io/api/';


export const URLs = {
    users: `${baseUrl}users`
}

export default class adduser{

    static cunduitNewUserUsingAPI (email: string, password: string, username: string){
        cy.api({
            method: 'POST',
            url: URLs.users,
            body:{
                username: username,
                email: email,
                password: password
            }
        })
    }


    static  generateUniqueID() {
        return Math.random().toString(36).substr(2, 8);
    }
}