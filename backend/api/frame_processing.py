from flask_socketio import SocketIO, emit
from api import socketio

# Handle the webapp sending a message to the websocket
@socketio.on('frame')
def handle_frame(message):
    # print('someone sent to the websocket', message)
    print("message")
    print('Data', message["data"])
