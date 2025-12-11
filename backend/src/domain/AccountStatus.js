const AccountStatus = Object.freeze({
    PENDING_VERIFICATION: 'PENDING_VERIFICATION',//account created but not yet verified
    ACTIVE: 'ACTIVE', //account is active and in good standing
    INACTIVE: 'INACTIVE', //account is temporarily inactive
    SUSPENDED: 'SUSPENDED', //account is suspended due to violations
    DEACTIVATED: 'DEACTIVATED',//account deactivated by user
    BANNED: 'BANNED', //account banned permanently
    CLOSED: 'CLOSED', //account closed after user request

});

//Export the enum for in use other models or files
module.exports = AccountStatus;