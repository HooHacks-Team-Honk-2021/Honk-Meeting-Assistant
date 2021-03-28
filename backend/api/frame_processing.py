from flask_socketio import SocketIO, emit
from api import socketio
import base64
import numpy as np
import cv2
from .gaze_tracking import GazeTracking
import json
import os

gaze = GazeTracking()

# Handle the webapp sending a message to the websocket
@socketio.on('frame')
def handle_frame(message):

    #print('Data', message["data"])
    image_string = message["data"].split(",")[1]
    msg = base64.b64decode(image_string)
        
    filename = f'test_images/some_image.jpeg'  # I assume you have a way of picking unique filenames
    with open(filename, 'wb') as f:
        f.write(msg)

    with open(filename, "rb") as f:
        im_b64 = base64.b64encode(f.read())

    im_bytes = base64.b64decode(im_b64)
    im_arr = np.frombuffer(im_bytes, dtype=np.uint8)  # im_arr is one-dim Numpy array
    img = cv2.imdecode(im_arr, flags=cv2.IMREAD_COLOR)

    gaze.refresh(img)

    with open("../ml/frames.json", "r") as frames:
        data = json.load(frames)
        curr_list = data["is_center_arr"]

        # treating None as looking away from the screen
        print(gaze.is_center())
        if gaze.is_center():
            curr_list.append(0)
        else:
            curr_list.append(1)

        data["is_center_arr"] = curr_list
    
    with open("../ml/frames.json", "w") as frames:
        json.dump(data, frames)
