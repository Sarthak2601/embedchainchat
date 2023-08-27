**Embedchain Chat**

A full stack chat application that uses Embedchain to create Chat-GPT like chat-bots using custom data sources. 

Setup instructions:

Step 1: Git clone the project. 

Step 2: Move to the server file using `cd server`. 

Step 3: `python3 -m venv venv` to set up python's virtual environment. 

Step 4: We need to activate this environment so do: `source venv/bit/activate`

Step 5: Let's install flask and flask-cors using pip: `pip3 install flask` and `pip3 install flask-cors`

Step 6: Now let's start our API server using: `python3 server.py`. 

Now that we have our API Server ready, let's start our frontend client: 

Step 7: Move to the client using first `cd ..` to move back to root folder and then `cd client` to move to the client folder. 

Step 8: Install next using: `npm i next`

Step 9: Run client using `npm run dev` and open up the project at: `http://localhost:3000`

**Note**: Due to dependency issues in setting up Embedchain, this project doesn't use Embedchain as of now. It uses mock response from Embedchain API's to add data source(s) and to query the bot. However, the APIs are setup in accordance with the request and response patterns of Embedchain -- so we may need not make major changes once Embedchain is correctly set up in the project. 
