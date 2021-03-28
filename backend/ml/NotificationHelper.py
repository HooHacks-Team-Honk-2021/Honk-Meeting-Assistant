# ever growing text file where bool values are added (0,1)
# at each addition of a bool value, call this file and loop through the text file
# if there is a a ratio of 135:150 frames looking away, send notification
# once notification sent, time.sleep(3000) and reset txt file 

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


