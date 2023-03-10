import cv2
import os
from keras.models import load_model
import numpy as np
from pygame import mixer
import time

mixer.init()
sound = mixer.Sound('alarm.wav')
# Load the pre-trained classifiers for face, right eye, and left eye
face = cv2.CascadeClassifier('haar cascade files/haarcascade_frontalface_alt.xml')
reye = cv2.CascadeClassifier('haar cascade files/haarcascade_righteye_2splits.xml')
leye = cv2.CascadeClassifier('haar cascade files/haarcascade_lefteye_2splits.xml')

cap = cv2.VideoCapture(0)


while(True):
    ret, frame = cap.read()
    cv2.imshow('Camera', frame)
    height,width = frame.shape[:2]


    #To detect the face in the image, we need to first convert the image into grayscale as the OpenCV algorithm for object detection takes gray images in the input. We don’t need color information to detect the objects
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = face.detectMultiScale(gray,minNeighbors=5,scaleFactor=1.1,minSize=(25,25))
    left_eye = leye.detectMultiScale(gray)
    right_eye =  reye.detectMultiScale(gray)

    for (x,y,w,h) in faces: 
        cv2.rectangle(frame, (x,y), (x+w, y+h), (100,100,100), 1 )

    for (x,y,w,h) in right_eye:
        cv2.rectangle(frame, (x,y), (x+w, y+h), (100,100,100), 1 )
        r_eye=frame[y:y+h,x:x+w]
        count=count+1
        r_eye = cv2.cvtColor(r_eye,cv2.COLOR_BGR2GRAY)
        r_eye = cv2.resize(r_eye,(24,24))
        r_eye= r_eye/255
        r_eye=  r_eye.reshape(24,24,-1)
        r_eye = np.expand_dims(r_eye,axis=0)
        lpred = model.predict_classes(l_eye)
        if(lpred[0]==1):
            lbl='Open'   
        if(lpred[0]==0):
            lbl='Closed'
        if(lpred[0]==2):
            lbl='No_yawm'
        if(lpred[0]==3):
            lbl='Yawm'
        break
    for (x,y,w,h) in left_eye:
        cv2.rectangle(frame, (x,y), (x+w, y+h), (100,100,100), 1 )
        l_eye=frame[y:y+h,x:x+w]
        count=count+1
        l_eye = cv2.cvtColor(l_eye,cv2.COLOR_BGR2GRAY)
        l_eye = cv2.resize(l_eye,(24,24))
        l_eye= l_eye/255
        l_eye= l_eye.reshape(24,24,-1)
        l_eye = np.expand_dims(l_eye,axis=0)
    

    cv2.imshow('frame',frame)