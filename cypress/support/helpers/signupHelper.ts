import { faker } from "@faker-js/faker";
import helpers from "./methodsHelper";

const baseUrl = 'https://conduit.productionready.io/api/';


export const URLs = {
    users: `${baseUrl}users`
}


export interface UserInfo {
    username: string;
    email: string;
    password: string;
}

// * add interfaces as required.


export default class adduser{

    static GenerateUserInfo(){
        return {
            user: {username: faker.person.fullName({firstName: 'ahmad'}),
            email: faker.internet.email,
            password: faker.internet.password}
        }
    }


    static cunduitNewUserUsingAPI (email: string, password: string, username: string){
        cy.api({
            method: 'POST',
            url: URLs.users,
            body:{
                user: {username: username,
                email: email,
                password: password}
            }
        }).then((response) => {
            expect(response.status).to.eq(201); // Expect a 200 OK response
            expect(response.body).to.have.property('user');
            expect(response.body.user).to.have.property('username',username);
            expect(response.body.user).to.have.property('email',email);
            // Add more assertions based on your expected response structure...
          });
    }
    
}