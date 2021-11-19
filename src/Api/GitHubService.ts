import axios from 'axios';

export interface SearchUsersAttributes {
    html_url?: string,
    avatar_url?: string,
    login?: string
}

export interface UserAttributes {
    location?: string,
    login?: string,
    email?: string,
    name?: string,
    public_repos?: number,
    hireable?: boolean,
    updated_at?: Date,
    created_at?: Date
}

const searchUsersBaseUrl = 'https://api.github.com/search/users?q=';
const GetUserAttributesBaseUrl = 'https://api.github.com/users/';

const headers: any = {
    "Authorization": `token ${process.env.REACT_APP_GIT_TOKEN}`,
}

const options = {
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
}

const SearchUsersAsync = async (queryString: string): Promise<SearchUsersAttributes[]> => {

    let userData = []
    try {
        const request = await axios.get(
            `${searchUsersBaseUrl}${queryString} in:name in:login in:email type:user&per_page=10`, { headers })


        console.log(`REQUEST FOR SEARCH USERS `, request);


        userData = request?.data?.items?.map((users: SearchUsersAttributes) => { return users })
    } catch (error) {
        console.error(error);
    }
    return userData;
}

const GetUserAttributesAsync = async (name: string) => {
    let userAttributes;
    try {
        let userAttributesResponse = await axios.get(`${GetUserAttributesBaseUrl}` + name, { headers })
        userAttributes = userAttributesResponse.data;

        console.log(`USER ATTS `, userAttributesResponse);

    } catch (error) {
        console.error(error);
    }
    return userAttributes;
}


export const GitHubService = {
    SearchUsersAsync,
    GetUserAttributesAsync
}

export default GitHubService;