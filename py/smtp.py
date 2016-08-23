from_addr = 'zjwengyidong@outlook.com'
password = 'w20130314'
to_addr = 'zjwengyidong@163.com'
smtp_server = 'smtp.163.com'

import smtplib
server = smtplib.SMTP(smtp_server, 25) # SMTP协议默认端口是25
server.set_debuglevel(1)
server.login(from_addr, password)
msg['Date'] = formatdate()
server.sendmail(from_addr, [to_addr], msg.as_string())
server.quit()