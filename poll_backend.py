from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from your static server

# Initialize poll results (match your frontend poll structure)
poll_results = [
    [0, 0],                      # Poll 0: 2 options
    [0, 0, 0, 0, 0, 0, 0],       # Poll 1: 7 options
    [0, 0, 0, 0],                # Poll 2: 4 options
    [0, 0, 0]                    # Poll 3: 3 options
]

@app.route('/vote', methods=['POST'])
def vote():
    data = request.json
    poll_idx = data.get('pollIndex')
    option_idx = data.get('optionIndex')
    if poll_idx is not None and option_idx is not None:
        try:
            poll_results[poll_idx][option_idx] += 1
            return jsonify(success=True)
        except IndexError:
            return jsonify(error='Invalid poll or option index'), 400
    return jsonify(error='Missing pollIndex or optionIndex'), 400

@app.route('/results', methods=['GET'])
def results():
    return jsonify(pollResults=poll_results)

@app.route('/reset', methods=['POST'])
def reset():
    global poll_results
    poll_results = [
        [0 for _ in poll] for poll in poll_results
    ]
    return jsonify(status='ok')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)
