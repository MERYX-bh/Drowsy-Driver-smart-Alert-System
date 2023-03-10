import cv2
import os
from keras.models import load_model
import numpy as np
from pygame import mixer
import time

mixer.init()
sound = mixer.Sound('alarm.wav')
model = load_model('models/model1.h5')

# Load the pre-trained classifiers for face, right eye, and left eye
face = cv2.CascadeClassifier('haar cascade files/haarcascade_frontalface_alt.xml')
reye = cv2.CascadeClassifier('haar cascade files/haarcascade_righteye_2splits.xml')
leye = cv2.CascadeClassifier('haar cascade files/haarcascade_lefteye_2splits.xml')

cap = cv2.VideoCapture(0)
font = cv2.FONT_HERSHEY_COMPLEX_SMALL
count=0
score=0
thicc=2
rpred=[99]
lpred=[99]

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
        face=frame[y:y+h,x:x+w]
        count=count+1
        face = cv2.cvtColor(face,cv2.COLOR_BGR2GRAY)
        face = cv2.resize(face,(24,24))
        face= face/255
        face= face.reshape(24,24,-1)
        face = np.expand_dims(face,axis=0)
        fpred = model.predict_classes(face)
        if(fpred[0]==2):
            flbl='No_yawm'
        if(fpred[0]==3):
            flbl='Yawm'
            cv2.putText(frame,"Yawm",(10,height-20), font, 1,(255,255,255),1,cv2.LINE_AA)
            try:
                sound.play()
                break #Since there's a yawm we don't need to check the eyes, we are sure we should set the alarm
            except:
                pass

    for (x,y,w,h) in right_eye:
        cv2.rectangle(frame, (x,y), (x+w, y+h), (100,100,100), 1 )
        r_eye=frame[y:y+h,x:x+w]
        count=count+1
        r_eye = cv2.cvtColor(r_eye,cv2.COLOR_BGR2GRAY)
        r_eye = cv2.resize(r_eye,(24,24))
        r_eye= r_eye/255
        r_eye=  r_eye.reshape(24,24,-1)
        r_eye = np.expand_dims(r_eye,axis=0)
        rpred = model.predict_classes(l_eye)
        if(rpred[0]==1):
            lbl='Open'   
        if(rpred[0]==0):
            lbl='Closed'

    for (x,y,w,h) in left_eye:
        cv2.rectangle(frame, (x,y), (x+w, y+h), (100,100,100), 1 )
        l_eye=frame[y:y+h,x:x+w]
        count=count+1
        l_eye = cv2.cvtColor(l_eye,cv2.COLOR_BGR2GRAY)
        l_eye = cv2.resize(l_eye,(24,24))
        l_eye= l_eye/255
        l_eye= l_eye.reshape(24,24,-1)
        l_eye = np.expand_dims(l_eye,axis=0)
        lpred = model.predict_classes(l_eye)
        if(lpred[0]==1):
            lbl='Open'   
        if(lpred[0]==0):
            lbl='Closed'
    
    if(rpred[0]==0 and lpred[0]==0):
        score= score + 1
    else:
        score = score - 1

    #After 5 seconds
    if score > 5:
        try:
            sound.play()
            break #Since there's a yawm we don't need to check the eyes, we are sure we should set the alarm
        except:
            pass

    cv2.imshow('frame',frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    
cap.release()
cv2.destroyAllWindows()
