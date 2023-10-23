import axios from 'axios'

//configure and export the Axios object that we will use to make HTTP requests to the relevant remote API through this code

export default axios.create({
    baseURL:"https://9c96-103-106-239-104.ap.ngrok.io/",
    headers:{"ngrok-skip-browser-warning":"true"}
    //This setting here is necessary. Because during the development phase, the technology that the remote machine is using to expose the relevant API endpoints is called ngrok.
    //we need to include this http headers setting in order for our client HTTP requests to not be blocked by cors because the relevant web API is running in a different domain, or origin.
})

