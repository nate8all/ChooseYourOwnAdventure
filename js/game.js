// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Stranger-Things-Theme.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            background_image:"videoblocks-adult-caucasian-man-talking-on-mobile-phone-late-at-night-while-lying-in-bed-in-bedroom-selective-focus-on-alarm-clock-on-bedside-table_b-g3pq2rw_thumbnail-small01.jpg",
            
            message: "You wake up in the middle of the night and you're having trouble going back to bed.",
            choices: [
                {
                    text: "Get out of bed.",
                    nextLevel: "hallwayUp",
                },

                {
                    text: "Keep trying to go back to sleep.",
                    nextLevel: "backToSleep",
                },
            ]
        },

        hallwayUp: {
            background_image: "scary-house-hallway-camera-traveling-high-definition-38343707.jpg",
            message: "Go to the bathroom and wash your face or go downstairs to grab a snack?",
            choices: [
                {
                    text: "Go to bathroom",
                    nextLevel: "bathroom",
                },
                {
                    text: "Go downstairs",
                    nextLevel: "downstairs",
                },
            ]
        },
        
        backToSleep: {
            message: "Goodnight...",
            choices: [
                {
                    text: "Replay",
                    nextLevel: "start",
                },
            ]
        },
        
        bathroom: {
            message: "You've washed your face. Now what?",
            choices: [
                {
                    text: "Back to bed.",
                    nextLevel: "backToSleep",
                },
                {
                    text: "Grab a snack downstairs.", 
                    nextLevel: "downstairs",
                },
            ]
        },
        
        downstairs: {
            message: "You find that the lights aren't working downstairs.",
            choices: [
                {
                    text: "Go back to bed",
                    nextLevel: "backToSleep",
                },
                {
                    text:"Find a flashlight and investigate", 
                    nextLevel: "intruder",
                },
            ]
        },
        intruder: {
            message: "You spot an intruder! What do you do?",
            choices: [
                {
                    text: "Stand shocked, paralyzed, still.",
                    nextLevel: "death",
                },
                {
                    text:"Attack him with the first thing you see, a TV Remote.",
                    nextLevel: "victory",
                },
            ]
        },
        death: {
            message: "He found you, and you didn't make it. RIP.",
            choices: [
                {
                    text: "Replay",
                    nextLevel: "start",
                },
            ]
        },
        
        victory: {
            message: "You knock him unconscious, call the police, and all is well.",
            choices: [
                {
                    text: "Replay",
                    nextLevel: "start",
                },
            ]
        },
        
        

    }
};
