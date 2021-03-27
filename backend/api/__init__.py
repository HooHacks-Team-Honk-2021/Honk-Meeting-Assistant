from flask_api import FlaskAPI
from flask import request
from flask_cors import CORS
from flask_socketio import SocketIO, emit

app = FlaskAPI(__name__)
socketio = SocketIO(app)
CORS(app)

from api.frame_processing import handle_frame


@socketio.on('connect')
def test_connect():
    print('someone connected to websocket')
    emit('responseMessage', {'data': 'Connected! ayy'})


if __name__ == "__main__":
    socketio.run(app) 