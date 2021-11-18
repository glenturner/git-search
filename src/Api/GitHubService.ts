import axios from 'axios';

export interface SearchUsersAttributes {
    url?: string,
    avatar_url?: string,
    login?: string
}

export interface UserAttributes {
    location?: string,
    email?: string,
    name?: string,
    public_repos?: number,
    updated_at?: Date,
    created_at?: Date
}

// const response = await axios.get(`${baseUrl}/` + username)
const searchUsersBaseUrl = 'https://api.github.com/search/users?q=';
const GetUserAttributesBaseUrl = 'https://api.github.com/users/';

const SearchUsersAsync = async (queryString: string): Promise<SearchUsersAttributes[]> => {
    let userData = []
    try {
        const userDataResponse = await axios.get(`${searchUsersBaseUrl}${queryString} in:name in:login in:email type:user&per_page=20`)

        userData = userDataResponse?.data?.items?.map((users: SearchUsersAttributes) => { return users })

    } catch (error) {
        console.error(error);
    }
    return userData;
}

const GetUserAttributesAsync = async (name: string) => {
    let userAttributes;
    try {
        let userAttributesResponse = await axios.get(`${GetUserAttributesBaseUrl}` + name)

        console.log(`user atts `, userAttributesResponse.data);

        userAttributes = userAttributesResponse.data;


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