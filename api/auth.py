import os
import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate('config/firebase-key.json')
firebase_admin.initialize_app(cred)

def verify_token(token):
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token['uid']
    except ValueError:
        return None

def require_auth(func):
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Authorization header is missing'}), 401
        user_id = verify_token(token)
        if not user_id:
            return jsonify({'error': 'Invalid authorization token'}), 401
        return func(*args, **kwargs)
    return wrapper