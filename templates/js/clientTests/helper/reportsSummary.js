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
            console.log(currentItemTitle,report.itemTitle,currentItemId );
            console.log(self.summary.blocks);
            self.summary.blocks[currentItemId-1].nrReports++;

            if(!report.passed){
                self.summary.nrFailedReports++;
                self.summary.blocks[currentItemId-1].nrFailedReports++;
                self.summary.blocks[currentItemId-1].failedReports.push(report);
            }
        });


        console.log(summary);
    }
    this.parseReports();

    return this;
};