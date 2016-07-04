import sys
sys.path.append('/usr/local/lib/python2.7/site-packages')

import numpy as np
import cv2
import random

def randomChar(mix):
    num = int(random.random() * 36)
    
    if(int(random.random() * 10) < mix):
        num = int(random.random() * 10)

    if num >= 10:
        num = num + 7
    return chr(num + 48)

# Load an color image in grayscale
img = cv2.imread('cross.png',0)
colors = [255, 60]
scale = 32

f = open('cross.html','w')
f.write("<html><head><link rel='stylesheet' type='text/css' href='binary.css'><script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'></script></head><body style='margin: 0px; padding: 0px;' ><div class='world-container'><div class='left-sea'></div><div class='right-sea'></div><div style='font-family: courier' class='center world'>")

prev = -1
f.write('<span>')

for y in range(0, img.shape[0] + 0,int(scale * (1.1 * img.shape[1]/img.shape[0]))):
    for x in range(0, img.shape[1] + 0, scale - 4):
        if y < 0 or y >= img.shape[0] + 0:
            px = 0
        elif x < 0 or x >= img.shape[1] + 0:
            px = 0
        else:
            px = img[y - 0, x - 0]
        if px > colors[0] - 50 and px < colors[0] + 50:
            if prev != 0:
                f.write("</span><span class='water'>")
            f.write(randomChar(7))
            prev = 0
        else:
            if prev != 1:
                if x >= img.shape[1] + 0 or y < 0:
                    f.write("</span><span class ='water'>")
                else:
                    f.write("</span><span class ='land'>")
            f.write(randomChar(7))
            prev = 1
    f.write("</span></br>")
    if prev == 0:
        f.write("<span class='water'>"); 
    else:
        f.write("<span class='water'>"); 
        
f.write("</div></div><script src='binary.js'></script></body></html>")
f.close()
