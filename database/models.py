from firebase_admin import firestore

db = firestore.client()

class InvestorData(db.Model):
    id = db.Column(db.String, primary_key=True)
    fullName = db.Column(db.String, nullable=False)
    idNumber = db.Column(db.String, nullable=False)
    phone = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    criteria = db.Column(db.String, nullable=False)
    submissionDate = db.Column(db.DateTime, nullable=False)