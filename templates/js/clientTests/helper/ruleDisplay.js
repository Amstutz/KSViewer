var ruleDisplay = function(element, report){
    this.element = $(element);
    this.previousBackground = this.element.css("background-color");
    this.previousBorder = this.element.css("border");
    this.state = "hidden";
    this.report = report;
    this.popover = null;
    var self = this;

    this.continueButton = "<div class='col-md-6'><a onclick='uiTestRunner.continue();' class='btn btn-default ui-test-next' href='#' role='button'>Next</a></div>";
    this.skipRuleButton = "<div class='col-md-6'><a onclick='uiTestRunner.skipRule();' class='btn btn-default ui-test-skip-rule' href='#' role='button'>Skip Rule</a></div>";

    this.buttons = "<div class='row'>"+this.continueButton+"" +this.skipRuleButton+"</div>";

    this.show = function(){

        console.log("ruleDisplay.show");

        if(this.element.length){
            this.popover = this.element.first().popover();

            this.element.first().data('bs.popover').options.title = this.report.itemTitle;
            this.element.first().data('bs.popover').options.content = this.report.message+this.buttons;
            this.element.first().data('bs.popover').options.placement = "auto";
            this.element.first().data('bs.popover').options.html = true;
            this.element.first().data('bs.popover').options.container = 'body'
            this.element.first().popover('show');

            this.popover.on('shown.bs.popover', function (e) {
                $(".popover .btn.btn-default").focus();

            });

            this.element.css("background-color","red", "!important");
            this.element.css("border","5px solid blue", "!important");
        }
        else{
            console.error("Failed rule has no valid selector!");
        }

    };
    this.hide = function(callback){
        console.log("ruleDisplay.hide");
        this.element.css("border", this.previousBorder);
        this.element.css("background-color", this.previousBackground);

        this.popover.on('hidden.bs.popover', function (e) {
            self.element.first().popover('destroy');
            callback();
        });

        this.element.first().popover('hide');

    };

    return this;
};