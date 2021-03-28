from flask_socketio import SocketIO, emit
from api import socketio
import base64
import numpy as np
import cv2

# Handle the webapp sending a message to the websocket
@socketio.on('frame')
def handle_frame(message):
    # print('someone sent to the websocket', message)
    print("message")
    print('Data', message["data"])
    image_string = message["data"]
    img_data = base64.b64decode(image_string)
    nparr = np.fromstring(img_data, np.uint8)
    print("nparr")
    print(nparr)
    img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    print("img_np")
    print(img_np)
    print(nparr)