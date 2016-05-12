il.uiTests.log = {
    on: 0,
    levels:{
        all:0,
        info:10,
        debug:20,
        warning:30

    },
    components: {
        uiTests: {
            level: 30
        },
        testRule: {
            level: 100
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
            level: 30
        },
        compareValues: {
            level: 30
        },
        countWords: {
            level: 0
        },
        countRelatives: {
            level: 0
        },
        structure: {
            level: 0
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
