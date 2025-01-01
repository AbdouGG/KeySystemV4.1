import { LINKVERTISE_URLS, getVerificationUrl } from './constants';
import { getHWID } from './hwid';

export const getCheckpointUrl = async (checkpoint: number): Promise<string> => {
  try {
    const hwid = getHWID();
    const baseUrl = LINKVERTISE_URLS[checkpoint as keyof typeof LINKVERTISE_URLS];
    const verificationUrl = getVerificationUrl(checkpoint, hwid);

    // Append verification URL to the Linkvertise URL
    const finalUrl = `${baseUrl}?hwid=${encodeURIComponent(hwid)}&target=${encodeURIComponent(verificationUrl)}`;
    return finalUrl;
  } catch (error) {
    throw new Error('Please get the link from Roblox to continue.');
  }
};