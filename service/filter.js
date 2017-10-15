exports.filterAccounts = (accountList) => {
    console.log('Filtering accounts' + accountList);
    
    const list = accountList.map(account => {
        return {
            // account: account.accountNumber,
            // name: account.name,
            distanceTo1337: Math.min(Math.abs(1337+account.available), Math.abs(1337-account.available)),
        }
    }).sort((el1, el2) => (
        el1.distanceTo1337 > el2.distanceTo1337
    )).filter((bla, index) => (
        index < 2
    ));

    return list;
};