// Linkvertise URLs for each checkpoint
export const LINKVERTISE_URLS = {
  1: 'https://link-target.net/1174023/check-point-1',
  2: 'https://link-target.net/1174023/check-point-2-nurk',
  3: 'https://link-target.net/1174023/check-point-3-nurk',
};

// Target URLs for Linkvertise (what to put in the target URL field)
export const TARGET_URLS = {
  1: 'https://nurkhub-get-key.netlify.app/verify/1/[HWID]',
  2: 'https://nurkhub-get-key.netlify.app/verify/2/[HWID]',
  3: 'https://nurkhub-get-key.netlify.app/verify/3/[HWID]',
};

// Function to get the actual verification URL
export const getVerificationUrl = (checkpoint: number, hwid: string): string => {
  const baseUrl = TARGET_URLS[checkpoint as keyof typeof TARGET_URLS];
  return baseUrl.replace('[HWID]', hwid);
};