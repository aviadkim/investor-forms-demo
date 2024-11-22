from flask import Flask, jsonify, request
from .auth import require_auth
from ..database.models import save_investor_data

app = Flask(__name__)

@app.route('/api/investor-form', methods=['POST'])
@require_auth
def submit_investor_form():
    form_data = request.get_json()
    save_investor_data(form_data)
    return jsonify({'message': 'Form submitted successfully'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)