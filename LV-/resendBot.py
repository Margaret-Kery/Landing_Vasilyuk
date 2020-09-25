from bot import bot
from app import app
from threading import Thread

def appStart():
    app.run()

def botStart():
    bot.polling(True, 0, 1000)

a = Thread(target=appStart)
a.start()

b = Thread(target=botStart)
b.start()
