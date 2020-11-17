let env = process.env.NODE_ENV;
let baseURL = '';

env === 'development' ? baseURL = 'http://192.168.100.224:3000' : baseURL = 'https://5fb30684b6601200168f6f5b.mockapi.io';

export default baseURL;