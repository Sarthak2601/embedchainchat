const QUERY_URL = 'http://127.0.0.1:5000/api/query';

export async function sendQuery(message: String): Promise<string> {
    try {
      const response = await fetch(QUERY_URL, {
        method: 'POST',
        body: JSON.stringify({ question: message }),
        headers: {
            'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Query Successful', responseData);
        return Promise.resolve(responseData.data); 
      } else {
        console.error('Error querying files:', response.statusText);
        return Promise.reject(response.statusText); 
      }
    } catch (error) {
      console.error('Error querying files:', error);
      return Promise.reject(error)
    }
}