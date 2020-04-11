
let securityScan = { 
    currentBadgeIdScanned: "",
    currentEmployeeNameScanned: "",
    badgeIdInBuilding: [],
    employeeNameInBuilding: [],
    badgeIdOutBuilding: [],
    employeeNameOutBuilding: [],
    inScan: function () {

        this.badgeIdInBuilding.push(this.currentBadgeIsScanned);
        this.employeeNameInBuilding.push(this.currentEmployeeNameScanned);
        console.log(`:::::In The Building::::`);
        console.log(`ID's: ${this.badgeIdInBuilding}`);
        console.log(`Names: ${this.employeeNameInBuilding}`);
    },
    outScan: function () {
        this.badgeIdOutBuilding.push(this.currentBadgeIsScanned);
        this.employeeNameOutBuilding.push(this.currentEmployeeNameScanned);
        console.log(`::::Out The Building::::`);
        console.log(`ID's: ${this.badgeIdOutBuilding}`);
        console.log(`Names: ${this.employeeNameOutBuilding}`);
    }
}
