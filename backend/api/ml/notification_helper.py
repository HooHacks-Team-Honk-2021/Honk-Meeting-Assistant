from collections import Counter
from ..ml.notify import send_text
import json
# ever growing text file where bool values are added (0,1)
# at each addition of a bool value, call this file and loop through the text file
# if there is a a ratio of 135:150 frames looking away, send notification
# once notification sent, time.sleep(3000) and reset txt file
NUM_TO_NOTIFY = 50
RATIO = 5/6

def should_notify():
    """
    Method that checks the text file array with list of frames to see if text notification should be sent to user.

    1 means looking away
    0 means focused
    """

    """
    1. Read the text file
    2. Check the current counter 
    """
    """ 

    target number is 5 and we given 15 numbers 
    [1,0,1,0,1,0,1,0,1,1,0,0,1,0,1] 

    check all last 150 nums, 
        if number of appearance of 1 >= 135, we send notification and we sleep for 3 secs 
        else, we contnue seeing the next 150 nums 
        
    if we find x 1s in the last x numbers
     
    """
    nums = []
    with open("ml/frames.json", "r") as frames:
        nums = json.load(frames)["is_center_arr"]

    occurrences = Counter(nums)
    print(occurrences[1], len(nums))

    if occurrences[1] > RATIO * NUM_TO_NOTIFY:

        print("send notif")

        # reset array with whether the user is looking or not
        with open("ml/frames.json", "w") as frames:
            json.dump({"is_center_arr": []}, frames)

        phone = ""
        name = ""
        with open("ml/phone.json", "r") as phone:
            data = json.load(phone)
            phone = data["phone"]
            name = data["name"]
            
        print(phone, name)
        #send_text(phone, name)
        return True

    else:

        return False


    """
    while r < len(nums):
        if windowchars[1] > 130:
        print("send notif")
        # reset
        return
        else:
            if nums[r] == 1:
                windowchars[1] += 1
            else:
                windowchars[0] += 1

            if nums[l] == 1:
                windowchars[1] -= 1
            else:
                windowchars[0] -= 1

        l += 1
        r += 1
    """
should_notify()
