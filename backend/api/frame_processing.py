from flask_socketio import SocketIO, emit
from api import socketio
import base64
import numpy as np
import cv2
from imageio import imread
import io
from .gaze_tracking import GazeTracking

gaze = GazeTracking()

# Handle the webapp sending a message to the websocket
@socketio.on('frame')
def handle_frame(message):
    # print('someone sent to the websocket', message)
    print("message")
    #print('Data', message["data"])
    image_string = message["data"]
        
    # reconstruct image as an numpy array
    img_data = base64.b64decode(image_string)
    #img = imread(io.BytesIO(base64.b64decode(image_string)))

    nparr = np.fromstring(img_data, np.uint8)

    frame = nparr

    gaze.refresh(frame)

    print(gaze.is_center())
    is_center = gaze.is_center()

    with open("../ml/frames.txt", "r+") as frames:
        print(frames)
        lines = frames.readlines()
        print(lines[0])

    """
    if not gaze.is_center():
        data[a] = true
        NotificationHelper()
    """

    
    #cv2_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    #img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    #print("img_np")
    #print(cv2_img)