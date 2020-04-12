let securityScan = { 
    currentBadgeIdScanned: "",
    currentEmployeeNameScanned: "",
    badgeIdInBuilding: [],
    employeeNameInBuilding: [],
    badgeIdOutBuilding: [],
    employeeNameOutBuilding: [],
    inScan: function () {
        if (this.badgeIdInBuilding.includes (this.currentBadgeIdScanned)) {
            console.log(`:::WARNING ${this.currentEmployeeNameScanned} IS ALREADY IN THE BUILDING!:::`); 
        } else 
        this.badgeIdInBuilding.push(this.currentBadgeIdScanned);
        this.employeeNameInBuilding.push(this.currentEmployeeNameScanned);
        console.log(`:::::In The Building::::`);
        console.log(`ID's: ${this.badgeIdInBuilding}`);
        console.log(`Names: ${this.employeeNameInBuilding}`);
    },
    outScan: function () {
        if (this.badgeIdOutBuilding.includes (this.currentBadgeIdScanned)) {
            console.log(`:::WARNING ${this.currentEmployeeNameScanned} DID NOT ENTER THE BUILDING GARAGE!:::`);
        } else
        this.badgeIdOutBuilding.push(   this.badgeIdInBuilding.splice(  this.badgeIdInBuilding.indexOf(this.currentBadgeIdScanned), 1    ).pop()  ); 
        this.employeeNameOutBuilding.push(    this.employeeNameInBuilding.splice(    this.employeeNameInBuilding.indexOf(this.currentEmployeeNameScanned), 1   ).pop()   );
        console.log(`::::Out The Building::::`);
        console.log(`ID's: ${this.badgeIdOutBuilding}`);
        console.log(`Names: ${this.employeeNameOutBuilding}`);
    }
}
function scanId (id, name, inout) {
    securityScan.currentBadgeIdScanned = id;
    securityScan.currentEmployeeNameScanned = name;
    if (inout == "in") {
        securityScan.inScan();
    } else if (inout == "out") {
        securityScan.outScan();
    }
    }
scanId("1234", "chelsea", "in");
scanId("1234", "chelsea", "out");
scanId("2345", "patrick", "in");
