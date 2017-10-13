exports.filterAccounts = (accountList) => {
    console.log('Filtering accounts' + accountList);
    
    const list = accountList.map(account => {
        return {
            account: account.accountNumber,
            name: account.name,
            distanceTo1337: Math.min(Math.abs(1337+account.available), Math.abs(1337-account.available)),
            available: account.available
        }
    }).reduce((prev, curr) => {
        if (curr.distanceTo1337 < prev.distanceTo1337) {
            return curr;
        }
        return prev;
    });

    return list.distanceTo1337;
};