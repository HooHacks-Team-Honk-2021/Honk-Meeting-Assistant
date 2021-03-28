from flask_api import FlaskAPI
from flask import request
from flask_cors import CORS
from flask_socketio import SocketIO, emit

app = FlaskAPI(__name__)
socketio = SocketIO(app)
CORS(app)

from api.frame_processing import handle_frame

@app.route("/phone", methods=["POST"])
def save_phone_num():
    """
    Method to save phone number in text file
    """
    phone_data = json.loads(request.get_data())

    with open("../ml/phone.txt", "w") as phone:
        phone.write(str(phone_data["phone_number"]))

    return 'Successfully saved phone number', 200


@socketio.on('connect')
def test_connect():
    print('someone connected to websocket')
    emit('responseMessage', {'data': 'Connected! ayy'})


if __name__ == "__main__":
    socketio.run(app) 