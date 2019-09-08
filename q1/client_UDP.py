import socket
import time
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

UDP_IP = '127.0.0.1'
UDP_PORT = 1123
BUFFER_SIZE = 1024

start_time = time.time()
sock.bind((UDP_IP, UDP_PORT))
data, addr = sock.recvfrom(BUFFER_SIZE)
end_time = time.time()

final_time = float(data) + (end_time - start_time)/2
print 'Server time = ' + data + ' Corrected Server time = ' + str(final_time)