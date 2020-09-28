import telebot

bot = telebot.TeleBot('986293588:AAH8fFE6hCTiU6LwNfsp-czO-LI_vkg6BGk')

@bot.message_handler(commands=['start'])
def resend(msg):
    while True:
        try:
            mes_list = []
            with open('cash.txt', 'r') as file:
                mes_list = list(map(lambda a: a.split('$%$'), file.readlines()))

            bot.send_message(-443413059, f'Имя: {mes_list[0][0]}\nНомер: {mes_list[0][1]}')
            print(mes_list)
            mes_list.pop(0)

            with open('cash.txt', 'w') as file:
                file.writelines(mes_list)

        except Exception:
            pass
