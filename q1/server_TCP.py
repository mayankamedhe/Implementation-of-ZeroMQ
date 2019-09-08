import socket
import time

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

sock.bind(('0.0.0.0', 8000))
sock.listen(5)

while True:
	conn, addr = sock.accept()

	count = time.time()
	msg = str(count)
	conn.send(msg) 
	print 'Current Server time is ' + msg + '. Server time sent!'

	conn.close()
	print 'Client disconnected!'