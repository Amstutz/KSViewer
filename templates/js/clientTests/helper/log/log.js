il.uiTests.log = {
    on: 1,
    levels:{
        all:0,
        info:10,
        debug:20,
        warning:30

    },
    components: {
        uiTests: {
            level: 3000
        },
        testRule: {
            level: 3000
        },
        testVariant: {
            level: 100
        },
        reportsDisplay: {
            level: 300
        },
        ruleDisplay: {
            level: 300
        },
        reportsSummary: {
            level: 300
        },
        wording: {
            level:300
        },
        compareValues: {
            level: 300
        },
        css: {
            level:300
        },
        countWords: {
            level: 300
        },
        countRelatives: {
            level: 300
        },
        structure: {
            level: 3000
        },
        collisionCheck: {
            level: 300
        },
        colorCheck: {
            level: 300
        },
        accessibility: {
            level: 300
        }
    },

    message: function(message,component,level){
        if(this.on){
            if(!level){
                level = this.levels.warning;
            }

            if(this.components.hasOwnProperty(component)){
                if(this.components[component].level<=level){
                    console.log(component,message);
                }
            }else{
                this.error("Log Component: " +component+" does not exist");
            }
        }
    },
    error: function(message){
        console.error(message);
    }
};
