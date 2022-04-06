const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const Pin = require('./models/pin');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const seedPins = [
  {
    //1
    user: "624cd7598d09c13f314edd1f",
    lat: 37.7840168,
    long: -122.4168622,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //2
    user: "624cd7598d09c13f314edd1f",
    lat: 37.767281,
    long: -122.414841,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //3
    user: "624cd7598d09c13f314edd1f",
    lat: 37.783625,
    long: -122.413979,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //4
    user: "624cd7598d09c13f314edd1f",
    lat: 37.782742,
    long: -122.414022,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //5
    user: "624cd5118d09c13f314edd16",
    lat: 37.782589,
    long: -122.414043,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //6
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.782835,
    long: -122.413941,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //7
    user: "624cd7e58d09c13f314edd23",
    lat: 37.785684,
    long: -122.414070,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //8
    user: "624cd8578d09c13f314edd27",
    lat: 37.785887,
    long: -122.412418,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //9
    user: "624cd5118d09c13f314edd16",
    lat: 37.787650,
    long: -122.413405,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //10
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.789956,
    long: -122.425593,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //11
    user: "624cd7e58d09c13f314edd23",
    lat: 37.787582,
    long: -122.459410,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //12
    user: "624cd8578d09c13f314edd27",
    lat: 37.786022,
    long: -122.455376,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //13
    user: "624cd5118d09c13f314edd16",
    lat: 37.785852,
    long: -122.457693,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //14
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.784427,
    long: -122.431300,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //15
    user: "624cd7e58d09c13f314edd23",
    lat: 37.784800,
    long: -122.428940,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //16
    user: "624cd8578d09c13f314edd27",
    lat: 37.800874,
    long: -122.443059,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //17
    user: "624cd5118d09c13f314edd16",
    lat: 37.800094,
    long: -122.442287,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //18
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.799246,
    long: -122.442716,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //19
    user: "624cd7e58d09c13f314edd23",
    lat: 37.802976,
    long: -122.441944,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //20
    user: "624cd8578d09c13f314edd27",
    lat: 37.801212,
    long: -122.440442,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //21
    user: "624cd5118d09c13f314edd16",
    lat: 37.807485,
    long: -122.414092,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //22
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.806162,
    long: -122.417225,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //23
    user: "624cd7e58d09c13f314edd23",
    lat: 37.806891,
    long: -122.418942,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //24
    user: "624cd8578d09c13f314edd27",
    lat: 37.807399,
    long: -122.417311,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //25
    user: "624cd5118d09c13f314edd16",
    lat: 37.803330,
    long: -122.423276,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //26
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.802245,
    long: -122.424821,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //27
    user: "624cd7e58d09c13f314edd23",
    lat: 37.804008,
    long: -122.424993,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //28
    user: "624cd8578d09c13f314edd27",
    lat: 37.764528,
    long: -122.452588,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //29
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.762628,
    long: -122.452245,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //30
    user: "624cd7e58d09c13f314edd23",
    lat: 37.766936,
    long: -122.449112,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //31
    user: "624cd8578d09c13f314edd27",
    lat: 37.763984,
    long: -122.421947,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //32
    user: "624cd5118d09c13f314edd16",
    lat: 37.766053,
    long: -122.424264,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //33
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.764424,
    long: -122.429714,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //34
    user: "624cd7e58d09c13f314edd23",
    lat: 37.759979,
    long: -122.434993,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //35
    user: "624cd8578d09c13f314edd27",
    lat: 37.757434,
    long: -122.437997,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //36
    user: "624cd5118d09c13f314edd16",
    lat: 37.761912,
    long: -122.435122,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //37
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.760215,
    long: -122.432375,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //38
    user: "624cd7e58d09c13f314edd23",
    lat: 37.763777,
    long: -122.470634,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //39
    user: "624cd5118d09c13f314edd16",
    lat: 37.763912,
    long: -122.467158,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //40
    user: "624cd8578d09c13f314edd27",
    lat: 37.761842,
    long: -122.464025,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //41
    user: "624cd5118d09c13f314edd16",
    lat: 37.783179,
    long: -122.390554,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //42
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.786197,
    long: -122.389782,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //43
    user: "624cd7e58d09c13f314edd23",
    lat: 37.790216,
    long: -122.393966,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //44
    user: "624cd8578d09c13f314edd27",
    lat: 37.790046,
    long: -122.391048,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //45
    user: "624cd5118d09c13f314edd16",
    lat: 37.788113,
    long: -122.393709,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //46
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.790656,
    long: -122.393452,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //47
    user: "624cd7e58d09c13f314edd23",
    lat: 37.791944,
    long: -122.391693,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //48
    user: "624cd8578d09c13f314edd27",
    lat: 37.785636,
    long: -122.396757,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //49
    user: "624cd5118d09c13f314edd16",
    lat: 37.779734,
    long: -122.411820,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //50
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.784007,
    long: -122.435724,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //51
    user: "624cd7e58d09c13f314edd23",
    lat: 37.800895,
    long: -122.443063,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //52
    user: "624cd8578d09c13f314edd27",
    lat: 37.800827,
    long: -122.462890,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //53
    user: "624cd5118d09c13f314edd16",
    lat: 37.800420,
    long: -122.460787,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //54
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.799572,
    long: -122.462847,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //55
    user: "624cd7e58d09c13f314edd23",
    lat: 37.801064,
    long: -122.465164,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //56
    user: "624cd8578d09c13f314edd27",
    lat: 37.798012,
    long: -122.468941,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //57
    user: "624cd5118d09c13f314edd16",
    lat: 37.795977,
    long: -122.467954,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //58
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.803166,
    long: -122.473318,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //59
    user: "624cd7e58d09c13f314edd23",
    lat: 37.803064,
    long: -122.460615,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //60
    user: "624cd8578d09c13f314edd27",
    lat: 37.796314,
    long: -122.459855,
    category: "Break In",
    description: "Those heiffers wanted to smash my front window! I am beyond pissed right now. I drove here after work to meet up with a friend and came back with my window smashed in. I literally had no belongings in my car and none of my windows are tinted so clearly whoever did this likes a little glass target practice. Luckily that was the only damage done so it is not too bad, but I definitely would not park here again!"
  },
  {
    //61
    user: "624cd5118d09c13f314edd16",
    lat: 37.798870,
    long: -122.398680,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //62
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.794393,
    long: -122.401427,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //63
    user: "624cd7e58d09c13f314edd23",
    lat: 37.793409,
    long: -122.400097,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //64
    user: "624cd8578d09c13f314edd27",
    lat: 37.798801,
    long: -122.399582,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //65
    user: "624cd5118d09c13f314edd16",
    lat: 37.797309,
    long: -122.410697,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //66
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.797546,
    long: -122.408551,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //67
    user: "624cd7e58d09c13f314edd23",
    lat: 37.797953,
    long: -122.405547,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //68
    user: "624cd8578d09c13f314edd27",
    lat: 37.777603,
    long: -122.404646,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //69
    user: "624cd5118d09c13f314edd16",
    lat: 37.779638,
    long: -122.406320,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //70
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.780452,
    long: -122.403445,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //71
    user: "624cd7e58d09c13f314edd23",
    lat: 37.789948,
    long: -122.417393,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //72
    user: "624cd8578d09c13f314edd27",
    lat: 37.796866,
    long: -122.430396,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //73
    user: "624cd5118d09c13f314edd16",
    lat: 37.797069,
    long: -122.428079,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //74
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.787607,
    long: -122.428551,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //75
    user: "624cd7e58d09c13f314edd23",
    lat: 37.780416,
    long: -122.432242,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //76
    user: "624cd8578d09c13f314edd27",
    lat: 37.779737,
    long: -122.438722,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //77
    user: "624cd5118d09c13f314edd16",
    lat: 37.783196,
    long: -122.439623,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //78
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.787232,
    long: -122.440224,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //79
    user: "624cd7e58d09c13f314edd23",
    lat: 37.786316,
    long: -122.445202,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //80
    user: "624cd8578d09c13f314edd27",
    lat: 37.753731,
    long: -122.488365,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //81
    user: "624cd5118d09c13f314edd16",
    lat: 37.731186,
    long: -122.462793,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //82
    user: "624cd5118d09c13f314edd16",
    lat: 37.731118,
    long: -122.463608,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //83
    user: "624cd5118d09c13f314edd16",
    lat: 37.732441,
    long: -122.458759,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //84
    user: "624cd5118d09c13f314edd16",
    lat: 37.732610,
    long: -122.456098,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //85
    user: "624cd5118d09c13f314edd16",
    lat: 37.732881,
    long: -122.453437,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //86
    user: "624cd5118d09c13f314edd16",
    lat: 37.745269,
    long: -122.457546,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //87
    user: "624cd5118d09c13f314edd16",
    lat: 37.746321,
    long: -122.455572,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //88
    user: "624cd5118d09c13f314edd16",
    lat: 37.745574,
    long: -122.451538,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //89
    user: "624cd5118d09c13f314edd16",
    lat: 37.750189,
    long: -122.451109,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //90
    user: "624cd5118d09c13f314edd16",
    lat: 37.758027,
    long: -122.452997,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //91
    user: "624cd5118d09c13f314edd16",
    lat: 37.768171,
    long: -122.448319,
    category: "Break In",
    description: "I had parked my car here and left for about an hour. Upon return, my rear window had been smashed into, with all of my belongings including my backpack, laptop, and camera gone. I filed a police report to no avail so I am posting here to assure no one else goes through the same thing I did. If you must go to this area, Uber or Lyft would be a much better option!!"
  },
  {
    //92
    user: "624cd5118d09c13f314edd16",
    lat: 37.768612,
    long: -122.446774,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //93
    user: "624cd5118d09c13f314edd16",
    lat: 37.770647,
    long: -122.445444,
    category: "Parts Theft",
    description: "Engine and radiator stolen"
  },
  {
    //94
    user: "624cd5118d09c13f314edd16",
    lat: 37.765321,
    long: -122.443255,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //95
    user: "624cd5118d09c13f314edd16",
    lat: 37.763285,
    long: -122.442053,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //96
    user: "624cd5118d09c13f314edd16",
    lat: 37.761249,
    long: -122.446044,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //97
    user: "624cd5118d09c13f314edd16",
    lat: 37.762809,
    long: -122.444499,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //98
    user: "624cd5118d09c13f314edd16",
    lat: 37.766473,
    long: -122.444542,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //99
    user: "624cd5118d09c13f314edd16",
    lat: 37.764335,
    long: -122.449692,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //100
    user: "624cd5118d09c13f314edd16",
    lat: 37.757685,
    long: -122.453554,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //101
    user: "624cd7e58d09c13f314edd23",
    lat: 37.783054,
    long: -122.412325,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //102
    user: "624cd8578d09c13f314edd27",
    lat: 37.784063,
    long: -122.411735,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //103
    user: "624cd5118d09c13f314edd16",
    lat: 37.784767,
    long: -122.413634,
    category: "Stolen Vehicle",
    description: "I am pinning this area so no one else has to go through what I just went through! I came here to get a nice evening jog in since I have been putting on a bit of weight during the winter time. I just love food. I came back and my ENTIRE CAR WAS GONE! This is what I get for trying out this healthier lifestyle. There weren't any other cars around, but knowing how long I can go for a run before gassing out, I thought I can trust the place."
  },
  {
    //104
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.783885,
    long: -122.414321,
    category: "Parts Theft",
    description: "It was around 12pm when I parked my car here. There were multiple cars around and many people out, so I would have never thought that the thievery would occur in broad daylight. I was only gone for about half an hour which I thought would be a safe window of time. I came back with no engine, no headlights, and my entire Family Pack of 5 Gum gone. I hope their breath smells delicious now."
  },
  {
    //105
    user: "624cd5118d09c13f314edd16",
    lat: 37.783758,
    long: -122.414128,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //106
    user: "624cd5118d09c13f314edd16",
    lat: 37.784428,
    long: -122.414407,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //107
    user: "624cd5118d09c13f314edd16",
    lat: 37.785795,
    long: -122.412871,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //108
    user: "624cd5118d09c13f314edd16",
    lat: 37.786346,
    long: -122.413129,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //109
    user: "624cd5118d09c13f314edd16",
    lat: 37.786829,
    long: -122.412603,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //110
    user: "624cd6c48d09c13f314edd1b",
    lat: 37.787423,
    long: -122.411616,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //111
    user: "624cd7e58d09c13f314edd23",
    lat: 37.786601,
    long: -122.414202,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //112
    user: "624cd7e58d09c13f314edd23",
    lat: 37.782198,
    long: -122.413917,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //113
    user: "624cd7e58d09c13f314edd23",
    lat: 37.780790,
    long: -122.414614,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //114
    user: "624cd7e58d09c13f314edd23",
    lat: 37.781808,
    long: -122.412168,
    category: "Break In",
    description: "I parked here at 3pm and there were a lot of other people around. All of my windows were completely smashed and my tires were slashed as well. Like others, I was not expecting this to happen during daytime, but I guess it does not matter what time of the day it is anymore. Take heed when heading to this area. I have parked here before and was fine so I was not expecting something to happen this time around."
  },
  {
    //115
    user: "624cd8578d09c13f314edd27",
    lat: 37.804203,
    long: -122.266832,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //116
    user: "624cd8578d09c13f314edd27",
    lat: 37.803915,
    long: -122.266993,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //117
    user: "624cd8578d09c13f314edd27",
    lat: 37.803237,
    long: -122.268431,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  },
  {
    //118
    user: "624cd8578d09c13f314edd27",
    lat: 37.802406,
    long: -122.268506,
    category: "Vandalism",
    description: "Who knew that parking your car here overnight would result in damage being done? What a shocker! Although it was not the smartest thing to do, I am actually surprised it didn't end up much worse. My entire passenger side was blacked out in spray paint. I tried to get it off but my diaper wipes were not working. Unless you want a nice new paint job, FIND SOMEWHERE ELSE TO PARK!"
  }
]

const seedDB = async () => {
  await Pin.deleteMany({});
  await Pin.insertMany(seedPins);
}

seedDB().then(() => {
  mongoose.connection.close();
})