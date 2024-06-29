from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({'message': 'Welcome to AIfinity API'})

@app.route('/api/advice')
def get_advice():
    # Placeholder logic to generate and return financial advice
    advice = "Invest in diversified assets based on market trends."
    return jsonify({'advice': advice})

if __name__ == '__main__':
    app.run(debug=True)
