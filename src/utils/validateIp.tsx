const validateIp = (ip: string): boolean => {
  const regex: RegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  let validIp: boolean = false;

  // Empty ip value in request returns public IP info, that's why it is "valid"
  if (regex.test(ip) || ip === '') {
    validIp = true;
  }

  return validIp;
};

export default validateIp;
