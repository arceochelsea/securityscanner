let securityScan = { 
    currentBadgeIdScanned: "",
    currentEmployeeNameScanned: "",
    badgeIdInBuilding: [],
    employeeNameInBuilding: [],
    badgeIdOutBuilding: [],
    employeeNameOutBuilding: [],
    inScan: function () {
        this.badgeIdInBuilding.push(this.currentBadgeIdScanned);
        this.employeeNameInBuilding.push(this.currentEmployeeNameScanned);
        console.log(`:::::In The Building::::`);
        console.log(`ID's: ${this.badgeIdInBuilding}`);
        console.log(`Names: ${this.employeeNameInBuilding}`);
    },
    outScan: function () {
       // if (this.badgeIdOutBuilding == this.badgeIdInBuilding)
        this.badgeIdOutBuilding.push(this.currentBadgeIdScanned);
        this.employeeNameOutBuilding.push(this.currentEmployeeNameScanned);
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
scanId("2345", "patrick", "out");

//once printed chelsea is in building, then out.
//then another output will result in chelsea and patrick out of building. but chelsea is not removed.
//when should chelsea be removed? 