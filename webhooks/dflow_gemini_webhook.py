import os
from flask import Flask, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

genai.configure(api_key=os.environ["GEMINI_API_KEY"])


@app.route('/webhook', methods=['POST'])
def webhook(request):
    req = request.get_json() 

    user_query = req['queryResult']['queryText']

    custom_prompt = ("Imagine you are a financial hygiene tutor. "
                     "Try to answer your student in a compact, short, "
                     "and highly informative way. write answer as one plaintext string do not use * characters, it's very important. Answer the following question: ")
    full_prompt = custom_prompt + user_query


    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(full_prompt)

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
