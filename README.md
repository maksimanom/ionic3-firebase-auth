# ionic-firebase-auth
Ionic proyect using Facebook and Google authentication.

## Ionic Info

```
cli packages: 

    @ionic/cli-utils  : 1.19.2
    ionic (Ionic CLI) : 3.20.0

local packages:

    @ionic/app-scripts : 3.1.10
    Ionic Framework    : ionic-angular 3.9.2

System:

    Node : v8.11.3
    npm  : 6.1.0
    OS   : Windows 10
```

## Demo
![Image of Demo2](https://github.com/vcjpierre/ionic-firebase-auth/blob/master/src/assets/Captura2.JPG)

## Steps

`$ git clone https://github.com/vcjpierre/ionic-firebase-auth`

`$ cd ionic-firebase-auth`

`$ npm i`

`$ ionic cordova prepare`

## Adding Firebase

1. Create folder "environments" in src and add the file firebase-config.ts inside this folder.

2. Add your firebase configuration in firebase-config.ts.

```ssh 
export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
```
