import os
from flask import Flask, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

genai.configure(api_key=os.environ["GEMINI_API_KEY"])


@app.route('/webhook', methods=['POST'])
def webhook(request):
    req = request.get_json() 

    user_query = req['queryResult']['queryText']

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(user_query)

    return jsonify({
        "fulfillmentMessages": [
            {
                "text": {
                    "text": [response.text]
                }
            }
        ]
    })


if __name__ == '__main__':
    app.run(port=8080, debug=True)
