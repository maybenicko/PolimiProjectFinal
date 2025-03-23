from flask import Flask, jsonify
import sqlite3
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)
current_directory = os.getcwd()
parent_directory = os.path.dirname(current_directory)


def get_data_from_db(db_name, table_name):
    conn = sqlite3.connect(f"{parent_directory}/DB_src/DB/TOP/{db_name}")
    cursor = conn.cursor()

    query = f"SELECT * FROM {table_name}"
    cursor.execute(query)
    data = cursor.fetchall()
    conn.close()
    return data


@app.route("/api/crypto", methods=["GET"])
def get_crypto_data():
    data = get_data_from_db("Crypto.db", "posts")
    formatted_data = []
    for item in data:
        items = item[1].split('::')
        post_id = item[0]
        formatted_data.append({
            "id": post_id,
            "name": items[0],
            "symbol": items[1],
            "description": items[2],
            "image": items[3]
        })
    return jsonify(formatted_data)


@app.route("/api/activity", methods=["GET"])
def get_activity_data():
    data = get_data_from_db("Activity.db", "posts")
    formatted_data = []
    for item in data:
        items = item[1].split('::')
        post_id = item[0]
        formatted_data.append({
            "id": post_id,
            "name": items[0],
            "symbol": items[1],
            "description": items[2],
            "image": items[3]
        })
    return jsonify(formatted_data)


@app.route("/api/politics", methods=["GET"])
def get_politics_data():
    data = get_data_from_db("Politics.db", "posts")
    formatted_data = []
    for item in data:
        items = item[1].split('::')
        post_id = item[0]
        formatted_data.append({
            "id": post_id,
            "name": items[0],
            "symbol": items[1],
            "description": items[2],
            "image": items[3]
        })
    return jsonify(formatted_data)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
