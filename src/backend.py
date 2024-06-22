from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
import time

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set your OpenAI API key here
openai.api_key = ""
ASSISTANT_ID = ""

@app.route('/get_cpv_code', methods=['POST'])
def get_cpv_code():
    # Get the product name from the request data
    data = request.json
    product_name = data.get('product_name', '')

    if not product_name:
        return jsonify({"error": "Product name is required"}), 400

    try:
        # Create the OpenAI API request
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "user will give you names of different products that will be subjects of government tenders and you need to return the CPV code, most relevant for that product. Just the code and nothing else."
                },
                {
                    "role": "user",
                    "content": product_name
                }
            ],
            temperature=1,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )

        # Extract the CPV code from the response
        cpv_code = response.choices[0].message['content'].strip()

        return jsonify({"cpv_code": cpv_code})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/ask_assistant', methods=['POST'])
def ask_assistant():
    data = request.json
    product_name = data.get('product_name', '')

    if not product_name:
        return jsonify({"error": "Product name is required"}), 400

    try:
        # Create a thread with a message
        thread = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "user will give you names of different products that will be subjects of government tenders and you need to return the CPV code, most relevant for that product. Just the code and nothing else."
                },
                {
                    "role": "user",
                    "content": product_name,
                }
            ]
        )

        # Wait for the response
        run = thread.choices[0].message['content'].strip()

        return jsonify({"cpv_code": run})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)