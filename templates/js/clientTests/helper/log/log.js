il.uiTests.log = {
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
            level: 10
        },
        testVariant: {
            level: 10
        },
        reportsDisplay: {
            level: 30
        },
        ruleDisplay: {
            level: 30
        },
        reportsSummary: {
            level: 30
        },
        wording: {
            level: 0
        },
        compareValues: {
            level: 0
        }
    },

    message: function(message,component,level){
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
    },
    error: function(message){
        console.error(message);
    }
};
