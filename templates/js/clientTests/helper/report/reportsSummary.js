var reportsSummary = function(reports){

    this.reports = reports;

    this.summary = {};
    this.summary.nrReports = 0;
    this.summary.nrFailedReports = 0;
    this.summary.blocks = [];
    var self = this;

    this.parseReports = function(){
        var currentItemTitle = {};
        var currentItemId = -1;

        reports.forEach(function(report){

            if(report.itemTitle != currentItemTitle){
                currentItemTitle = report.itemTitle;
                currentItemId = self.summary.blocks.push({
                    "title": report.itemTitle,
                    "nrReports": 0,
                    "nrFailedReports": 0
                });
                self.summary.blocks[currentItemId-1].failedReports = [];
            }

            self.summary.nrReports++;

            il.uiTests.log.message({"Current title":currentItemTitle,
                "Report Title":report.itemTitle,"Current Item id":currentItemId },
                "reportsSummary",il.uiTests.log.levels.info);



            il.uiTests.log.message(self.summary.blocks,"reportsSummary",il.uiTests.log.levels.info);


            self.summary.blocks[currentItemId-1].nrReports++;

            if(!self.summary.types){
                self.summary.types = [];

            }
            if(!self.summary.types[report.type]){
                self.summary.types[report.type] = {};
                self.summary.types[report.type].nrReports = 0;
                self.summary.types[report.type].nrFailedReports = 0;


            }
            self.summary.types[report.type].nrReports++;
            self.summary.blocks[currentItemId-1].nrReports++;

            if(!report.passed){
                self.summary.nrFailedReports++;
                self.summary.types[report.type].nrFailedReports++;
                self.summary.blocks[currentItemId-1].nrFailedReports++;
                self.summary.blocks[currentItemId-1].failedReports.push(report);
            }
        });


        il.uiTests.log.message(summary,"reportsSummary",il.uiTests.log.levels.info);
    }
    this.parseReports();

    return this;
};