from flask_socketio import SocketIO, emit
from api import socketio
import base64
import numpy as np
import cv2
from imageio import imread
import io
from .gaze_tracking import GazeTracking
import sys
from PIL import Image
#np.set_printoptions(threshold=sys.maxsize)


gaze = GazeTracking()

# Handle the webapp sending a message to the websocket
@socketio.on('frame')
def handle_frame(message):
    # print('someone sent to the websocket', message)
    print("message")
    #print('Data', message["data"])
    image_string = message["data"].split(",")[1]
    msg = base64.b64decode(image_string)
    
    count = 0
    with open("../ml/frames.txt", "r+") as frames:
        lines = frames.readlines()
        print(str(lines))
        curr_list = list(eval(lines[1]))
        print(curr_list)
        count = len(curr_list)
        
    filename = f'test_images/some_image{count}.jpeg'  # I assume you have a way of picking unique filenames
    with open(filename, 'wb') as f:
        f.write(msg)

            
    with open(filename, "rb") as f:
        im_b64 = base64.b64encode(f.read())

    os.remove(filename)

    im_bytes = base64.b64decode(im_b64)
    im_arr = np.frombuffer(im_bytes, dtype=np.uint8)  # im_arr is one-dim Numpy array
    img = cv2.imdecode(im_arr, flags=cv2.IMREAD_COLOR)
    print(img)
    frame = img

    gaze.refresh(frame)

    with open("../ml/frames.txt", "r+") as frames:
        lines = frames.readlines()
        curr_list = list(eval(lines[1]))
        curr_list.append(gaze.horizontal_ratio())
        lines[1] = str(curr_list)
    
    with open("../ml/frames.txt", "w") as frames:
        frames.writelines(lines)

    print(gaze.horizontal_ratio())
    print("left")
    print(gaze.is_left())
    print("right")
    print(gaze.is_right())
    print("center")
    print(gaze.is_center())

    """
    print(gaze.is_center())
    is_center = gaze.is_center()

    with open("../ml/frames.txt", "r+") as frames:
        lines = frames.readlines()
        print(lines[0])
    """

    """
    if not gaze.is_center():
        data[a] = true
        NotificationHelper()
    """

    
    #cv2_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    #img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    #print("img_np")
    #print(cv2_img)