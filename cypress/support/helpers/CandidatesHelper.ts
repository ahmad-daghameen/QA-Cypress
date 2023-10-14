import { faker } from "@faker-js/faker";
import helpers from "./methodsHelper";

const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/';


export const URLs = {
    shedule_interview: `${baseUrl}v2/recruitment/candidates/36/shedule-interview`,
    candidates: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates`,
    
}


export default class addCandidate {
    static GenerateInterviewInfo() {
        return {
            "interviewName": "Test",
            "interviewDate": "2023-10-16",
            "interviewTime": "01:00",
            "note": null,
            "interviewerEmpNumbers": [
                3
            ]
        }

    }

    static GenerateCandidateInfo() {
        return {

            "firstName": faker.person.firstName(),
            "middleName": faker.person.middleName(),
            "lastName": faker.person.lastName(),
            "email": faker.internet.email(),
            "contactNumber": null,
            "keywords": null,
            "comment": null,
            "dateOfApplication": "2023-10-14",
            "consentToKeepData": false,
            "vacancyId": 8

        }

    }


    static GenerateinterviewInfo() {
        return {

            
                "interviewName": "'gfsfg",
                "interviewDate": "2023-10-21",
                "interviewTime": null,
                "note": null,
                "interviewerEmpNumbers": [
                    6
                ]
            

        }

    }




}

