var reportsDisplay = function(reportsSummary){

    this.summary = reportsSummary.summary;

    il.uiTests.log.message(this.reports ,"reportsDisplay",il.uiTests.log.levels.info);

    this.generateContent = function(){
        var html = "";

        html += "<p>Total nr of Reports: "+this.summary.nrReports+"</p>";
        html += "<p>Total nr passed Reports: "+(this.summary.nrReports-this.summary.nrFailedReports) +" ("+(this.summary.nrReports-this.summary.nrFailedReports)/this.summary.nrReports*100+"%)</p>";
        html += "<p>Total nr failed Reports: "+(this.summary.nrFailedReports) +" ("+(this.summary.nrFailedReports)/this.summary.nrReports*100+"%)</p>";

        this.summary.blocks.forEach(function(block){
            html += "<dl>";
            html += "<dt>"+block.title+"</dt>";
            if(block.failedReports.length == 0){
                html += "<dd>"+"All rules passed"+"</dd>";
            }
            block.failedReports.forEach(function(report){
                html += "<dd>"+report.message+"</dd>";//: "+report.level+"</dd>";
            });
            html += "</dl>";
        });

        return html;
    }

    this.settings = {
        id:       "il_ks_reports_display",
        show: true,
        header: "Report",
        body: this.generateContent(),
        buttons:  {
            cancel:  {
                label:"Done",
                type:      "button",
                className: "btn btn-default",
                callback:  function (e, $modal) {
                    $modal.modal("hide");
                }
            }
        }

    }

    this.show = function(){
        il.uiTests.log.message("reportsDisplay.show","reportsDisplay",il.uiTests.log.levels.info);
        il.Modal.dialogue(this.settings);

    };

    this.hide = function(callback){
        il.uiTests.log.message("reportsDisplay.hide","reportsDisplay",il.uiTests.log.levels.info);
        this.element.css("border", this.previousBorder);
        this.element.css("background-color", this.previousBackground);

        self.element.first().popover('destroy').done(callback());

    };
    this.show();
};