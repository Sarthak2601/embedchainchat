from flask import Flask, request, jsonify
from flask_cors import CORS
import os
# from embedchain import App

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = os.getenv('UPLOAD_FOLDER', 'uploads')
ALLOWED_EXTENSIONS = {'txt', 'pdf'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# os.environ["OPENAI_API_KEY"] = ""
# app.config['OPENAI_API_KEY'] = ""
# embedChainBot = App()

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/upload', methods=['POST'])
def upload_file():
    try:
        files = request.files.getlist('file')
        if not files:
            return jsonify({'error': 'No files uploaded'}), 400
        
        success = True

        for file in files:
            if file.filename == '':
                continue
            
            if file and allowed_file(file.filename):
                filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
                file.save(filename)
                # embedChainBot.add(file)
            else:
                success = False

        if success:
            return jsonify({'message': 'Files uploaded successfully'}), 200
        else:
            return jsonify({'error': 'Invalid file format'}), 400
    except Exception as e:
        app.logger.error(str(e))
        return jsonify({'error': 'An error occurred'}), 500
    
@app.route('/api/query', methods=['POST'])
def query_bot():
    try: 
        question = request.json.get('question')
        print(question)
        response_data = {"data": "TEST RESPONSE FROM API"}
        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({"erorr", str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
