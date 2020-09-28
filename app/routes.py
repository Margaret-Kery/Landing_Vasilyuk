from app import app
from flask import render_template, request, redirect

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/resend', methods=['GET', 'POST'])
def resend():
    if request.method == 'GET':
        return redirect('/')
    
    else:
        with open('cash.txt', 'a') as f:
            f.write(request.form.get('user_name') + '$%$' + request.form.get('user_phone') + '\n')
        return redirect('/')
