from flask_api import FlaskAPI
from flask import request
from flask_cors import CORS

app = FlaskAPI(__name__)
CORS(app)

if __name__ == "__main__":
    app.run()