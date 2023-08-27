**Embedchain Chat**

A full stack chat application that uses Embedchain to create Chat-GPT like chat-bots using custom data sources. 

Setup instructions:

Step 1: Git clone the project and add your OpenAI API key in server.py as value for `OPEN_AI_API_KEY` const inside the server folder. 

Step 2: Move to the server file using `cd server`. 

Step 3: `python3 -m venv venv` to set up python's virtual environment. 

Step 4: We need to activate this environment so do: `source venv/bin/activate`

Step 5: Let's install flask and flask-cors using pip: `pip3 install flask` and `pip3 install flask-cors`

Step 6: Now, we also install our star of the show Embedchain by: `pip3 install embedchain`

Step 7: Now let's start our API server using: `python3 server.py`. 

Now that we have our API Server ready, let's start our frontend client: 

Step 8: Move to the client by first opening a new terminal window and then `cd client` to move to the client folder. 

Step 9: Install next using: `npm i next`

Step 10: Run client using `npm run dev` and open up the project at: `http://localhost:3000`
