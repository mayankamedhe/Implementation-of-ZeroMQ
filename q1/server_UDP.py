import socket
import time

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

UDP_IP = '127.0.0.1'
UDP_PORT = 1123

while True:
	count = time.time()
	msg = str(count)
	sock.sendto(msg, (UDP_IP, UDP_PORT))
	print 'Current Server time is ' + msg + '. Server time sent!'

