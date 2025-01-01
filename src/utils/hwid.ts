// Remove HWID generation since we'll use the one from Roblox
export const getHWID = (): string => {
  const params = new URLSearchParams(window.location.search);
  const hwid = params.get('hwid');
  
  if (!hwid) {
    throw new Error('No HWID provided. Please get the link from Roblox.');
  }
  
  return hwid;
};

export const verifyHWID = (hwid: string): boolean => {
  return hwid.startsWith('HWID-');
};