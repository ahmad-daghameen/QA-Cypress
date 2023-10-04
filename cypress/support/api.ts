// cypress/support/api.ts


const baseUrl = 'https://conduit.productionready.io/api/';

export const URLs = {
    users: `${baseUrl}users`
}


export  enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
    // * Add any other methods you need
}

//type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiOptions {
    url: string;
    method: HttpMethod;
    payload?: any;
    headers?: Record<string, string>;
}

export const callApi = (options: ApiOptions) => {
    return cy.api({
        url: options.url,
        method: options.method,
        body: options.payload,
        headers: options.headers,
    });
};


export const apiOptions = (u: string, m:HttpMethod, p: any) => {
    return {
        url: u,
        method: m,
        payload: p
    }
}
