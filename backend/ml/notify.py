
# /usr/bin/env python
# Download the twilio-python library from twilio.com/docs/libraries/python
import os
from twilio.rest import Client

# Find these values at https://twilio.com/user/account
# To set up environmental variables, see http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

def send_text(number, name):
    """
    Method to send text message to person with given phone and name.
    """
    
    client.api.account.messages.create(
        to=f"+1{number}",
        from_="+12678002959",
        body=f"Hey {name}! This is a friendly reminder to pay attention to your meeting." 
    )

    return


